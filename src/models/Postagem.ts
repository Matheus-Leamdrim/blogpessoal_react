export default interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data:string;
    tema: string;
    usuario?: Postagem | null;
}