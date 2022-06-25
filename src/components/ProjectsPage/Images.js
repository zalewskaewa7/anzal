import React from 'react';
import ImgDialog from "./ImgDialog.js";
 
var listOfImages =[];

class Images extends React.Component{
    constructor(props) {
        super(props)
          this.state = {
             imgPath: "",
            index:""
            }
           this.previousImage = this.previousImage.bind(this);
            this.nextImage = this.nextImage.bind(this);

    }
      
    importAll(r) {
        return r.keys().map(r);
    }
    componentDidMount() {
        this.setState({imgPath: " "});
       return (listOfImages = this.importAll(require.context('./ProjectsImg/', false, /\.(png|jpg|jpe?g|svg)$/))
    ); 
}

previousImage(){
  var currentElementList = this.state.index;
var previousImgPath = listOfImages[currentElementList-1];
this.zoomIn(previousImgPath, currentElementList-1);
  
      } 
    
nextImage(){
var currentElementList = this.state.index;
var nextImgPath = listOfImages[currentElementList+1];
this.zoomIn(nextImgPath, currentElementList+1);
      }

zoomIn(e,f){
    
    var biggerPhoto = document.getElementById("imgDialog");
     biggerPhoto.style.display = "flex";
     this.setState({imgPath: e})
     this.setState({index: f})

  

     var image = document.getElementById(f);
        if(image.naturalWidth < image.naturalHeight){
            
            biggerPhoto.style.width = "35%";
            biggerPhoto.style.top = "0%";
            

          }else{
            biggerPhoto.style.width = "55%";;          
            biggerPhoto.style.top = "8%";
          }
         
         
          var hidePreviousButton = document.getElementById("btnPreviousImage");          
          var hideBtnNextImage = document.getElementById("btnNextImage");     
          var lastImages =  listOfImages.length-1;
    if(f===0){
      hidePreviousButton.style.display="none";
    }else if(f=== lastImages){
      hideBtnNextImage.style.display="none";    
    }else{
      hidePreviousButton.style.display="block";
    hideBtnNextImage.style.display="block"; 
    

    }
}
    render(){
        return(
          <div className="galerry">
              
             {
                    listOfImages.map(
                      (image, index) => {
                
                          return(
                                
                                <img className="elementCNCimg" id={index} onClick={() => this.zoomIn(image, index)} title="Kliknij, żeby powiększyć zdjęcie" key={index} src={image} alt={"element cnc "+image}></img>
                                
                          )
                      }   
                    )
              }
              <ImgDialog path={this.state.imgPath} nextImage={this.nextImage} previousImage= {this.previousImage} />
          </div>
        )
    }
}
export default Images;

