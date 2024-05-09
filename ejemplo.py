import mysql.connector as mysql

mydb = mysql.connect(
  host="localhost",
  user="root",
  password="",
  database="bd_ejemplo"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM fecha")

myresult = mycursor.fetchall()
for row in myresult:
  print(row)

