export const seed = `
  
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

  CREATE TABLE IF NOT EXISTS vehiculo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idTipoVehiculo TEXT,
    tipoVehiculo string,
    idTipoCombustible INTEGER,
    tipoCombustible TEXT,
    numeroLegajo TEXT,
    numeroChasis TEXT,
    patente TEXT,
    idDependencia INTEGER,
    dependencia TEXT
  );
`;