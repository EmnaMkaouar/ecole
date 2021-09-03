import { TimetableDTO } from "./dto/timetable.dto";

export class TimetableAPI {
    public static async getAll(): Promise<TimetableDTO[]>{
        const resp = await fetch ("http://localhost:5000/Timetable", {method: "GET"})
        const data = await resp.json();
        console.log("timetable list: ", JSON.stringify(data));
        return data;
    }

    public static async add(timetableRequest:TimetableDTO) {
        const resp = await fetch ("http://localhost:5000/timetable", 
        {method: "POST", 
        body: JSON.stringify(timetableRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        console.log("timetable list: ", JSON.stringify(data));
        return data;
    }


    public static async deleteOne(timetableId:number) {
        await fetch (`http://localhost:5000/timetable/${timetableId}`, 
        {method: "DELETE"}
    )}

    

}