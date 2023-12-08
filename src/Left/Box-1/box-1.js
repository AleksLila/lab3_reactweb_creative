import './Box1.css'

function Box1(){
    return(
        <div>
            
            <div class="box-1">
                <div class="heading">
                    <p>CONTACT</p>
                </div>
                <p class="p1"><i class="material-icons icons1">call</i>+123-324-555</p>
                <p class="p1"><i class="material-icons icons1">email</i>example@ukr.net</p>
            </div>
            <div class="box-1">
                <div class="heading">
                    <p>LANGUAGES</p>
                </div>
                <p class="p1">HTML
                    <div class="skill-container">
                        <div class="skill html"></div>
                    </div>
                </p>    
                <p class="p1">CSS
                    <div class="skill-container">
                        <div class="skill css"></div>
                    </div>
                </p>    
                <p class="p1">JAVASCRIPT
                    <div class="skill-container">
                        <div class="skill js"></div>
                    </div>
                </p>    
                <p class="p1">JQUERY
                    <div class="skill-container">
                        <div class="skill jquery"></div>
                    </div>
                </p>  
            </div> 
            <div class="box-1">
                <div class="heading">
                    <p>SKILLS</p>
                </div>

                <p class="p1">WEBSITE DESIGN
                <div class="skill-container">
                    <div class="skill web"></div>
                </div>
                </p> 

                <p class="p1">GRAPHIC DESIGN
                <div class="skill-container">
                    <div class="skill gra"></div>
                </div>
                </p> 
            </div>
            <div class="box-1">
                <div class="heading">
                    <p>HOBBIES</p>
                </div>

                <div class="h-div"> 
                    <i class="material-icons icons2">camera_roll</i>
                    <i class="material-icons icons2">music_note</i>
                    <i class="material-icons icons2">border_color</i>
                    <i class="material-icons icons2">motorcycle</i>
                </div>

          
            </div> 
        </div>
    );
}

export default Box1;