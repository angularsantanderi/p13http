export interface Cliente {
    _id?: string,
    nombre: string;
    modalidad?: string;
    categoria?: string;
    direccion: string;
    localidad: string;
    municipio?: string;
    zona?: string;
    actividades: string;
    tipo?: string;
}