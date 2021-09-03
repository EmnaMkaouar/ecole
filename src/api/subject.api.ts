import { SubjectDTO } from "./dto/subject.dto";

export class SubjectAPI {
    public static async getAll(): Promise<SubjectDTO[]>{
        const resp = await fetch ("http://localhost:5000/subject", {method: "GET"})
        const data = await resp.json();
        console.log("subject list: ", JSON.stringify(data));
        return data;
    }

    public static async add(subjectRequest:SubjectDTO) {
        const resp = await fetch ("http://localhost:5000/subject", 
        {method: "POST", 
        body: JSON.stringify(subjectRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        console.log("subject list: ", JSON.stringify(data));
        return data;
    }


    public static async deleteOne(subjectId:number) {
        await fetch (`http://localhost:5000/subject/${subjectId}`, 
        {method: "DELETE"}
    )}



}