class sinhVien {
    //phương thức khởi tạo
    constructor(ten, tuoi, msv, lopHoc, diaChi, sex, love) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.msv = msv;
        this.lopHoc = lopHoc;
        this.diaChi = diaChi;
        this.sex = sex;
        if (sex == true) {
            console.log(`${this.sex}: nam`);
        }
        else {
            console.log(`${this.sex}: nữ`);
        }
        // this.sex = sex;
        this.love = love;
    }
    //phương thức
    hoc() {
        console.log(`${this.ten} đang làm bài tập`);
    }
    talk() {
        console.log(`${this.ten} đang nói chuyện`);
    }
}
var student1 = new sinhVien('Nguyễn Trọng Long', 20, 'B9185', 'C2110H1', 'Thanh Xuân, Hà Nội', true, 'độc thân');
console.log(student1);
student1.hoc();
student1.talk();
