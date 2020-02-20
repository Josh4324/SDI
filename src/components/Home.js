import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Home = () => {
    const imgRef= useRef(null);
    const imageList = ["sdi2.png","sdi3.jpg"]

    const onClickArrow = (arrow) => {
        if (arrow === "right"){
            
            let textarr = imgRef.current.src.split('/')
            console.log(textarr)
            let index = imageList.indexOf(textarr[textarr.length - 1])
            console.log(index)
            if (index === imageList.length - 1){
                index = -1
            }
            index += 1
            imgRef.current.src = imageList[index]
        }

        if (arrow === "left") {
            let textarr = imgRef.current.src.split('/')
            console.log(textarr)
            let index = imageList.indexOf(textarr[textarr.length - 1])
            console.log(index)
            if (index === 0){
                index = imageList.length
            }
            index -= 1
            imgRef.current.src = imageList[index]
        }
        
    }

    return (
        <div className="home">
             <div className="slide">

                <div className="pic">
                    <FontAwesomeIcon onClick={ () => onClickArrow("left") } className="fas arrow1" icon={faArrowAltCircleLeft} />
                    <FontAwesomeIcon onClick={ () => onClickArrow("right") } className="fas arrow2" icon={faArrowAltCircleRight} />
                    <img src="sdi2.png" ref={imgRef} className="img" alt="sdi"/>
                    
                </div>

             </div>
            

            <div className="section1">
                <h1 className="head">What is SDI</h1>
                <div className="inner-section">
                <div className="content">
                    <p className="para">SDI is crucial infrastructure for researchers, government and industry, accelerating research into our towns, cities and communities. We provide the data and tools to allow you to make evidence-based decisions quickly
                    and confidently, and we can help you get in touch with world leading urban experts right here in 
                    Nigeria.
                    </p>
                </div>

               

                <div className="cardlist">
                    <div className="card">

                    </div>

                    <div className="card">

                    </div>

                    <div className="card">

                    </div>
                </div>
                </div>
                

            </div>

           <Footer></Footer>
        </div>
    );
}

export default Home;
