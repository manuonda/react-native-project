export const seed = `
  DROP TABLE IF EXISTS vehiculos;
  CREATE TABLE IF NOT EXISTS tareas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    descripcion TEXT,
    fechaVencimiento TEXT,
    repetir INTEGER,
    nota TEXT,
    filePath TEXT,
    cameraPath TEXT
  );

  CREATE TABLE IF NOT EXISTS conductores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido TEXT,
    jerarquia TEXT,
    numeroLegajo TEXT,
    numeroCredencial TEXT,
    ejemplar TEXT
  );

  CREATE TABLE IF NOT EXISTS vehiculos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idTipoVehiculo INTEGER,
    tipoVehiculo TEXT,
    idTipoCombustible INTEGER,
    tipoCombustible TEXT,
    numeroLegajo TEXT,
    numeroChasis TEXT,
    numeroMotor TEXT,
    chapaPatente TEXT,
    idDependencia INTEGER,
    dependencia TEXT
  );

  CREATE TABLE IF NOT EXISTS cargas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  idEstacionServicio TEXT,
  estacionServicio TEXT,
  kilometraje TEXT,
  nivelTanque TEXT,
  litrosHabilitados  TEXT,
  numeroRemito TEXT,
  idConductor INTEGER,
  idVehiculo INTEGER
  );
  

`;