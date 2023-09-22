export type Tarea = {
    id:number;
    nombre:string;
    descripcion?:string;
    fechaVencimiento?: string;
    repetir?: number;
    nota?: string;
    filePath?: string;
    cameraPath?: string;
}
