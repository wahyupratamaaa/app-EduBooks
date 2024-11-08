from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from os.path import join, dirname
from datetime import datetime
import requests
from werkzeug.security import generate_password_hash, check_password_hash
import secrets

# Buat token unik
costom_token = "BukuKu" + secrets.token_hex(16)
print('tokenBukuKu:', costom_token)

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

MONGODB_URL = os.getenv('MONGODB_URL')
DB_NAME = os.getenv('DB_NAME')

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

try:
    client = MongoClient(MONGODB_URL)
    db = client[DB_NAME]
    print("Koneksi ke MongoDB berhasil!")
except Exception as e:
    print(f"Gagal terhubung ke MongoDB: {e}")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def data():
    return render_template("data.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        user = db.users.find_one({"username": username})

        # Periksa apakah user ada dan password benar
        if user and check_password_hash(user["password"], password):
            session["user_id"] = str(user["_id"])
            session["username"] = user["username"]
            session["token"] = costom_token  # Simpan token di session
            return jsonify({"message": "Hi Selamat Datang "}), 200
        else:
            return jsonify({"error": "Username atau password salah"}), 401

    return render_template("login.html")

@app.route("/registrasi", methods=["GET", "POST"])
def registrasi():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        confirmmpassword = request.form.get("confirmmpassword")

        if not username or not password or not confirmmpassword:
            return jsonify({"error": "Semua field harus diisi"}), 400
        if password != confirmmpassword:
            return jsonify({"error": "Password dan konfirmasi password tidak cocok"}), 400

        hashed_password = generate_password_hash(password)

        user_data = {
            "username": username,
            "password": hashed_password,
            "created_at": datetime.now()
        }

        db.users.insert_one(user_data)
        return jsonify({"message": "Registrasi berhasil!"}), 201

    return render_template("registrasi.html")

@app.route("/logout")
def logout():
    # Hapus session
    session.pop("user_id", None)
    session.pop("username", None)
    session.pop("token", None) 
    return redirect(url_for("login"))

@app.route("/dashboard")
def dashboard():
    # Cek apakah user sudah login
    if "user_id" in session:
        return render_template("dashboard.html", username=session["username"], token=session["token"])
    return redirect(url_for("login"))

@app.route("/produk")
def produk():
    return render_template("produk.html")

@app.route("/tentang")
def tentang():
    return render_template("tentang.html")

@app.route("/checkout")
def checkout():
    return render_template("checkout.html")

@app.route("/dashboardProduk")
def dashboardProduk():
    return render_template("dashboardProduk.html")

if __name__ == "__main__":
    app.run('0.0.0.0', port=3080, debug=True)
