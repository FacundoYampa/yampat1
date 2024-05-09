Curso de Tester de Aplicaciones

Agencia de aprendizaje a lo largo de la vida. Gobierno de la Ciudad Autónoma de Buenos Aires.

Martes(virtual) y Miercoles(presencial): 18:30-21:30.

Temas:
Git
Html y Css
JavaScript(funciones, eventos, ajax)
Bases de datos
Selenium IDE

terminal 8/5
PS C:\xampp\htdocs\yampat1> pip install mysql
Collecting mysql
  Downloading https://files.pythonhosted.org/packages/9a/52/8d29c58f6ae448a72fbc612955bd31accb930ca479a7ba7197f4ae4edec2/mysql-0.0.3-py3-none-any.whl
Collecting mysqlclient (from mysql)
  Downloading https://files.pythonhosted.org/packages/50/5f/eac919b88b9df39bbe4a855f136d58f80d191cfea34a3dcf96bf5d8ace0a/mysqlclient-2.1.1.tar.gz (88kB)
    100% |████████████████████████████████| 92kB 5.5MB/s
Installing collected packages: mysqlclient, mysql
  Running setup.py install for mysqlclient ... error
    Complete output from command c:\python\python.exe -u -c "import setuptools, tokenize;__file__='C:\\Users\\Alumno\\AppData\\Local\\Temp\\pip-install-tj4piu4t\\mysqlclient\\setup.py';f=getattr(tokenize, 'open', open)(__file__);code=f.read().replace('\r\n', '\n');f.close();exec(compile(code, __file__, 'exec'))" install --record C:\Users\Alumno\AppData\Local\Temp\pip-record-z4jwatmd\install-record.txt --single-version-externally-managed --compile:
    running install
    running build
    running build_py
    creating build
    creating build\lib.win32-3.7
    creating build\lib.win32-3.7\MySQLdb
    copying MySQLdb\__init__.py -> build\lib.win32-3.7\MySQLdb
    copying MySQLdb\_exceptions.py -> build\lib.win32-3.7\MySQLdb
    copying MySQLdb\connections.py -> build\lib.win32-3.7\MySQLdb
    copying MySQLdb\converters.py -> build\lib.win32-3.7\MySQLdb
    copying MySQLdb\cursors.py -> build\lib.win32-3.7\MySQLdb
    copying MySQLdb\release.py -> build\lib.win32-3.7\MySQLdb
    copying MySQLdb\times.py -> build\lib.win32-3.7\MySQLdb
    creating build\lib.win32-3.7\MySQLdb\constants
    copying MySQLdb\constants\__init__.py -> build\lib.win32-3.7\MySQLdb\constants
    copying MySQLdb\constants\CLIENT.py -> build\lib.win32-3.7\MySQLdb\constants
    copying MySQLdb\constants\CR.py -> build\lib.win32-3.7\MySQLdb\constants
    copying MySQLdb\constants\ER.py -> build\lib.win32-3.7\MySQLdb\constants
    copying MySQLdb\constants\FIELD_TYPE.py -> build\lib.win32-3.7\MySQLdb\constants
    copying MySQLdb\constants\FLAG.py -> build\lib.win32-3.7\MySQLdb\constants
    running build_ext
    building 'MySQLdb._mysql' extension
    error: Microsoft Visual C++ 14.0 is required. Get it with "Microsoft Visual C++ Build Tools": https://visualstudio.microsoft.com/downloads/   

    ----------------------------------------
Command "c:\python\python.exe -u -c "import setuptools, tokenize;__file__='C:\\Users\\Alumno\\AppData\\Local\\Temp\\pip-install-tj4piu4t\\mysqlclient\\setup.py';f=getattr(tokenize, 'open', open)(__file__);code=f.read().replace('\r\n', '\n');f.close();exec(compile(code, __file__, 'exec'))" install --record C:\Users\Alumno\AppData\Local\Temp\pip-record-z4jwatmd\install-record.txt --single-version-externally-managed --compile" failed with error code 1 in C:\Users\Alumno\AppData\Local\Temp\pip-install-tj4piu4t\mysqlclient\
You are using pip version 19.0.3, however version 24.0 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.
PS C:\xampp\htdocs\yampat1> python -m pip install --upgrade pip
Collecting pip
  Downloading https://files.pythonhosted.org/packages/8a/6a/19e9fe04fca059ccf770861c7d5721ab4c2aebc539889e97c7977528a53b/pip-24.0-py3-none-any.whl (2.1MB)
    100% |████████████████████████████████| 2.1MB 3.2MB/s
Installing collected packages: pip
  Found existing installation: pip 19.0.3
    Uninstalling pip-19.0.3:
      Successfully uninstalled pip-19.0.3
Successfully installed pip-24.0
PS C:\xampp\htdocs\yampat1> pip install mysql
Collecting mysql
  Downloading mysql-0.0.3-py3-none-any.whl.metadata (746 bytes)
Collecting mysqlclient (from mysql)
  Downloading mysqlclient-2.1.1.tar.gz (88 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 88.1/88.1 kB 1.3 MB/s eta 0:00:00
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Installing backend dependencies ... done
  Preparing metadata (pyproject.toml) ... done
Downloading mysql-0.0.3-py3-none-any.whl (1.2 kB)
Building wheels for collected packages: mysqlclient
  Building wheel for mysqlclient (pyproject.toml) ... error
  error: subprocess-exited-with-error

  × Building wheel for mysqlclient (pyproject.toml) did not run successfully.
  │ exit code: 1
  ╰─> [23 lines of output]
      running bdist_wheel
      running build
      running build_py
      creating build
      creating build\lib.win32-cpython-37
      creating build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\__init__.py -> build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\_exceptions.py -> build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\connections.py -> build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\converters.py -> build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\cursors.py -> build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\release.py -> build\lib.win32-cpython-37\MySQLdb
      copying MySQLdb\times.py -> build\lib.win32-cpython-37\MySQLdb
      creating build\lib.win32-cpython-37\MySQLdb\constants
      copying MySQLdb\constants\__init__.py -> build\lib.win32-cpython-37\MySQLdb\constants
      copying MySQLdb\constants\CLIENT.py -> build\lib.win32-cpython-37\MySQLdb\constants
      copying MySQLdb\constants\CR.py -> build\lib.win32-cpython-37\MySQLdb\constants
      copying MySQLdb\constants\ER.py -> build\lib.win32-cpython-37\MySQLdb\constants
      copying MySQLdb\constants\FIELD_TYPE.py -> build\lib.win32-cpython-37\MySQLdb\constants
      copying MySQLdb\constants\FLAG.py -> build\lib.win32-cpython-37\MySQLdb\constants
      running build_ext
      building 'MySQLdb._mysql' extension
      error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/
      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
  ERROR: Failed building wheel for mysqlclient
Failed to build mysqlclient
ERROR: Could not build wheels for mysqlclient, which is required to install pyproject.toml-based projects
PS C:\xampp\htdocs\yampat1> pip install mysql.conector
ERROR: Could not find a version that satisfies the requirement mysql.conector (from versions: none)
ERROR: No matching distribution found for mysql.conector
PS C:\xampp\htdocs\yampat1> pip install mysql.connector
Collecting mysql.connector
  Downloading mysql-connector-2.2.9.tar.gz (11.9 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 11.9/11.9 MB 11.5 MB/s eta 0:00:00
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Installing backend dependencies ... done
  Preparing metadata (pyproject.toml) ... done
Building wheels for collected packages: mysql.connector
  Building wheel for mysql.connector (pyproject.toml) ... done
  Created wheel for mysql.connector: filename=mysql_connector-2.2.9-cp37-cp37m-win32.whl size=247952 sha256=5e7ad8ad4041e2c679195284573d5fd3df295c487dc3b68f82785eec6f6aa60b
  Stored in directory: c:\users\alumno\appdata\local\pip\cache\wheels\42\2f\c3\692fc7fc1f0d8c06b9175d94f0fc30f4f92348f5df5af1b8b7
Successfully built mysql.connector
Installing collected packages: mysql.connector
Successfully installed mysql.connector-2.2.9