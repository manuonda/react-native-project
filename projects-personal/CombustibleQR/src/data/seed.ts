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
`;