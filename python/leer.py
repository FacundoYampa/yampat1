import mysql.connector as mysql

# Establece la conexión con la base de datos
mydb = mysql.connect(
  host="localhost",
  user="root",
  password="",
  database="bd_ejemplo"
)

# Crea un cursor para ejecutar consultas SQL
mycursor = mydb.cursor()

# Ejecuta una consulta SQL para obtener datos
mycursor.execute("SELECT * FROM fecha")

# Obtén todos los resultados de la consulta
myresult = mycursor.fetchall()

# Imprime los resultados
for row in myresult:
  print(row)

# Cierra el cursor y la conexión
mycursor.close()
mydb.close()