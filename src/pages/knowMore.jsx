import React from "react";
import Sahayaklogo from "./sahayakLogo";
import Columns from "./columns";
import Newsletter from "./newsLetter";

const KnowMore = ()=>(
    <div className="knowMore">
        
        

        <div className="box">
        {/* <S></SocialMedia> */}
        <Sahayaklogo></Sahayaklogo>
        <div className="footlogo"></div>
        <Columns >
        </Columns>
        <Newsletter></Newsletter>
        </div>
        

        <div className="copyright">
            <p>All rights reserved to Sahayak Pvt. Ltd.</p>
        </div>
    </div>

)

export default KnowMore;