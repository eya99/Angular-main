


export class ImageModel{
   id?:number;
    name:string;
    type:string;
    picByte:any;

    constructor(name,type,picByte){
        this.name=name;
        this.type=type;
        this.picByte=picByte;
    
    }
    }


/* private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
	@Column(name = "picByte", length = 1000)
	private byte[] picByte;
	 */