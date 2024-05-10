import mysql.connector

# Establece la conexión con la base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bd_ejemplo"
)

# Crea un cursor para ejecutar consultas SQL
cursor = conexion.cursor()

# Ejecuta una consulta SQL para insertar valores
consulta = "INSERT INTO fecha (valor) VALUES (%s)"
valores = ("valornuevo",)

cursor.execute(consulta, valores)

# Asegúrate de hacer commit para confirmar los cambios en la base de datos
conexion.commit()

# Cierra el cursor y la conexión
cursor.close()
conexion.close()