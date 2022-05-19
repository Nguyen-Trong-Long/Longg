class sinhVien{
    ten:string;
    tuoi:number;
    msv:string;
    lopHoc:string;
    diaChi:string;
    sex:boolean;
    love:string;

    //phương thức khởi tạo
    constructor(ten:string,tuoi:number, msv:string, lopHoc:string,diaChi:string,sex:boolean,love:string){
        this.ten = ten;
        this.tuoi = tuoi;
        this.msv = msv;
        this.lopHoc = lopHoc;
        this.diaChi = diaChi;
        this.sex = sex;
        if (sex == true) {
            console.log(`${this.sex}: nam`)
        } else {
            console.log(`${this.sex}: nữ`)
        }
        // this.sex = sex;
        this.love = love;
    }

    //phương thức
    hoc():void{
        console.log(`${this.ten} đang làm bài tập`);
    }
    talk():void{
        console.log(`${this.ten} đang nói chuyện`);
    }
}
var student1 = new sinhVien('Nguyễn Trọng Long',20,'B9185','C2110H1','Thanh Xuân, Hà Nội',true,'độc thân');
console.log(student1);
student1.hoc();
student1.talk();