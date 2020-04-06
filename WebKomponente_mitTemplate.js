
//Web Component <marrakesch-pictures>
 class MarrakeschPictures extends HTMLElement{
    constructor(){
        super();
        
    }
    
 
    connectedCallback()
    {
        
        //Shadow Root definiert
        const shadowRoot = this.attachShadow({mode: 'closed'});
        
        
         //Template Elemente werden aufgerufen und der Variablen 
         //templateContent  zugewiesen
         let template = document.querySelector('template');
         let templateContent = template.content;
        
         //Knoten werden dupliziert und dem Shadow Root angehängt
         shadowRoot.appendChild(templateContent.cloneNode(true));
       
        
        //<h1>
        let newElem = shadowRoot.getElementById("ueberschrift1");
        let inhaltText = document.createTextNode('Marrakesch - Die Perle des Südens');
        //Der Text wird an das h1-Element angehängt
        newElem.appendChild(inhaltText); 
        
        //<p>
        let pElem = shadowRoot.getElementById("text1");
        let pText = document.createTextNode('Im 10. Jahrhundert wurde Marrakesch gegründet und zählt zu den Königsstädten Marokkos.');
        pElem.appendChild(pText);
        
        
        //<img>
        let newImage = shadowRoot.getElementById("bild1");
        newImage.setAttribute("name", "slide");
        newImage.setAttribute("width", "900");
        newImage.setAttribute("height", "550");
        newImage.setAttribute("src", "roteStadt.png");
        newImage.setAttribute("style", "margin: 0; padding: 0; align: center");
       
     
        //Array der Bilder
        let bilder = ['Bild10.jpeg', 'Bild4.jpeg', 'Bild5.jpeg', 'Bild8.jpeg', 'Bild1.jpeg'];
        let wert = true;
        let index = 0;
        
       
    //slideShow -> ändert die Bilder
     function slideShow()
        { 
            
                if(index <= 4)
                {
                    newImage.setAttribute("src",bilder[index]);
                    setTimeout(slideShow, 2200);
                    
                  
                }
                else
                    {   //Nach einem Durchlauf wird die Slideshow beendet.
                        //es soll ja keine Endlosschleife werden
                        //Klickt der Benutzer auf das Bild startet die Sliedshow nochmal
                        newImage.setAttribute("src","roteStadt.png");
                        newImage.addEventListener('click', slideShow, false);
                        
                        index = 0;//Slideshow startet wieder mit dem ersten Bild
                    }
            
              
            
            //Zu jedem Bild wird die passende Beschreibung ausgegeben
            
            if(index === 0){
                 pElem.innerHTML ="Marrakesch- eine Stadt im Südosten Marokkos.";
                
                
            }
            if(index === 1){
                 pElem.innerHTML ="Das Tal von Ourika bei Marrakesch.";
                  
                
            }
            
            if(index === 2)
                {
                    pElem.innerHTML ="In der Umgebung von Ourika gibt es wunderschöne Wasserfälle.";   
                }
            
            if(index === 3)
                {
                    pElem.innerHTML ="Die Koutoubia Moschee - im 15. Jahrhundert gebaut.";
                      
                }
            
            if(index === 4){
                    pElem.innerHTML ="Das Atlas Gebirge und der Toubkal Berg (der höchste Berg Marokkos).";   
                }
            
           
              index++;
            
        }
        
        
        
        
        
        //Durch das Event "Bild Anklicken", beginnt die Sliedeshow
        newImage.addEventListener('click', slideShow, false);
    }
       
 }
    
    
 
  

//Registrierung des Custom Elements
customElements.define('marrakesch-pictures', MarrakeschPictures);

