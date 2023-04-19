import React,{useEffect,useContext,useState} from 'react'
import { 
    Button,  
    Card,
    CardBody,
    CardFooter,
    CardHeader,  
    Progress,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
import classes from './media.module.css';
import {AuthContext} from '../../context/Auth/AuthContext';
import {checkType, maxSelectedFile, checkFileSize} from './Funcs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMedia = (props)=>{
    const {dispatch} = useContext(AuthContext);
    const [loadedFiles,setLoadedFiles] = useState([]);
    useEffect(()=>{
    
        dispatch({type:'check',payload:props})
      },[])
    
    const onFilesLoad = (event)=>{
        if(checkType(event) && maxSelectedFile(event) && checkFileSize(event))
        {
            const files = event.target.files;
            const newLoadedFiles =[...loadedFiles];
            for(let x=0;x<files.length;x++){
                newLoadedFiles.push({
                    file:files[x],
                    preview:URL.createObjectURL(files[x]),
                    loaded:0
                })
            }
            setLoadedFiles(newLoadedFiles)
        }
       
    }
    const removeLoadedFile = (fileProperty)=>{
        const newFile = loadedFiles.filter(idFile=>idFile!==fileProperty);
        setLoadedFiles(newFile)
    }
    const onDragOverHandler = (e)=>{
        e.preventDefault();
    }
    const onDropHandler = (e)=>{
        e.preventDefault();
        const files = e.dataTransfer.files;
        // const files = e.data;
        const newLoadedFiles =[...loadedFiles];
        for(let x=0;x<files.length;x++){
            newLoadedFiles.push({
                file:files[x],
                preview:URL.createObjectURL(files[x]),
                loaded:0
            })
        }
        setLoadedFiles(newLoadedFiles)
        
    }
    const Upload = ()=>{
        const tempLoadedFiles = [...loadedFiles];
        for(let x=0;x<loadedFiles.length;x++){
            if(loadedFiles[x].loaded!==100){
                let data ={
                    query:`
                    mutation addmultimedia($image : Upload!) {
                        multimedia(image : $image) {
                          status,
                          message
                        }
                      }`,
                      variables:{
                        "image" : null,
                      }
                };
                let map={
                    0:['variables.image']
                }
                const formD = new FormData();
                formD.append('operations' , JSON.stringify(data));
                formD.append('map', JSON.stringify(map));
                formD.append(0, loadedFiles[x].file,loadedFiles[x].file.name);

                
                axios({
                    url:'/',
                    method:'post',
                    data:formD,
                    onUploadProgress : ProgressEvent=>{
                        tempLoadedFiles[x].loaded = ProgressEvent.loaded/ProgressEvent.total*100
                    }
                }).then((response)=>{
                    if(response.data.errors){
                        const {message} = response.data.errors[0]
                        toast.error(message)
                    }else{
                        setLoadedFiles(tempLoadedFiles)
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
    return(
        <div className="animated fadeIn">
            <ToastContainer />
            <Card>
                <CardHeader>
                    <h6>اضافه کردن پرونده چند رسانه ای</h6>
                </CardHeader>
                <CardBody>
                    <div className={classes.addMediaSection}
                        onDragOver={onDragOverHandler}
                        onDrop={onDropHandler}
                    >
                        <div className={classes.filePreview}>
                        {
                            loadedFiles.map((file,index)=>{
                                return(
                                    <div className={classes.file} key={index}>
                                        {
                                            file.loaded ===0 ?
                                            <span className={classes.removeIcons} onClick={()=>removeLoadedFile(file)}>
                                                <i className="fa fa-remove fa-lg mt-4"></i>
                                             </span>
                                        :null
                                        }
                                        
                                        <img src={file.preview} alt={file.preview} />
                                        <Progress bar color="success" value={file.loaded} >
                                            {Math.round(file.loaded,2)}%
                                        </Progress>
                                    </div>
                                )
                            })

                        }
                          
                            
                        </div>
                        <div className={classes.dragdropSection}>
                            <h3>پرونده ها را اینجا بکشید</h3>
                            <span>یا</span>
                            <Form className="form-horizontal">
                                <FormGroup row>
                                    <Label htmlFor="file-multiple-input" >
                                        <div className={classes.fileSelection}>گزینش پرونده</div>
                                    </Label>
                                    <Input type="file" id="file-multiple-input" name="file-multiple-input"
                                        multiple
                                        onChange={onFilesLoad}
                                        />

                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                        <Button type="submit" size="sm" color="primary" onClick={Upload}>
                            <strong>آپلود </strong>
                        </Button>
                </CardFooter>  
            </Card>
        </div>
    )
}
export default AddMedia;
