import Chart from '../component/chart/Chart'
import Finfo from '../component/Finfo/Finfo'
import NavbarAd from '../component/NavbarAd'
import back from "../images/A4.jpeg"
import { userData } from '../component/chart/dData'

export default function Home() {
    return (
         <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
         <NavbarAd/>
         <div className="home">
             <Finfo/>
             <Chart data={userData} title=" الحضور" dataKey="Active User"/>
             
         </div>
        </div>
    )
}
