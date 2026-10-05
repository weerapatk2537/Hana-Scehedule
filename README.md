# Welcome BABY HANA — ตั้งค่าและเผยแพร่เว็บ

เว็บนี้ใช้ Firebase (ฟรี) เก็บข้อมูลและฝากเว็บ

- **ผู้เยี่ยม**: ไม่ต้องล็อกอิน ลงทะเบียนได้ทันที ในปฏิทินจะเห็นช่องที่มีคนจองแล้วเป็นคำว่า **Busy** ไม่เห็นชื่อ
- **Admin**: กด "เข้าสู่ระบบ Admin" ท้ายหน้าเว็บ แล้วล็อกอินด้วย Google จะเห็นชื่อผู้เยี่ยม จำนวนคน และของเยี่ยมทั้งหมด
  - กดช่องในปฏิทินเพื่อดูรายละเอียดหรือลบรายการ
  - เพิ่ม แก้ หรือลบรายการของในหน้า Gifts ได้

## ไฟล์ในโปรเจกต์

| ไฟล์ | ใช้ทำอะไร |
|---|---|
| `public/index.html` | หน้าเว็บ |
| `public/app.js` | การทำงานของหน้าเว็บ และการเชื่อม Firebase |
| `public/firebase-config.js` | **ต้องแก้**: ค่าการเชื่อมต่อ Firebase |
| `firestore.rules` | **ต้องแก้**: อีเมล Admin และกฎว่าใครอ่านหรือเขียนอะไรได้ |
| `.firebaserc` | **ต้องแก้**: Project ID |
| `firebase.json` | การตั้งค่า Firebase Hosting |

## ขั้นตอน (ทำครั้งเดียว ประมาณ 15 นาที)

### 1. สร้างโปรเจกต์ Firebase
1. เข้า https://console.firebase.google.com แล้วกด **Create a project** ตั้งชื่อ เช่น `baby-hana` (ไม่ต้องเปิด Google Analytics)
2. จด **Project ID** ไว้ ดูได้ที่ Project settings เช่น `baby-hana-1a2b3`

### 2. เปิดฐานข้อมูล Firestore
1. เมนูซ้าย **Build → Firestore Database → Create database**
2. เลือก location `asia-southeast1 (Singapore)` แล้วเลือก **Start in production mode**

### 3. เปิดการล็อกอินด้วย Google (สำหรับ Admin)
1. **Build → Authentication → Get started → Sign-in method → Google → Enable** แล้วกด Save
2. หลังเผยแพร่เว็บแล้ว ถ้าจะใช้โดเมนอื่นที่ไม่ใช่ `*.web.app` ต้องเพิ่มโดเมนนั้นใน **Authentication → Settings → Authorized domains**

### 4. สร้าง Web App แล้วคัดลอกค่า config
1. **Project settings (รูปเฟือง) → Your apps → ไอคอน `</>`** ตั้งชื่อแอป แล้วกด Register
2. คัดลอกค่าใน `firebaseConfig` มาวางแทนค่า `PASTE_...` ในไฟล์ `public/firebase-config.js`

### 5. ใส่อีเมล Admin และ Project ID
- `firestore.rules`: แก้ `'ADMIN_EMAIL@gmail.com'` เป็นอีเมล Google ที่จะใช้ล็อกอิน Admin ถ้ามีหลายคนให้คั่นด้วยจุลภาค เช่น `['a@gmail.com', 'b@gmail.com']`
- `.firebaserc`: แก้ `PASTE_PROJECT_ID` เป็น Project ID

อีเมล Admin อยู่ในไฟล์กฎซึ่งอยู่ฝั่งเซิร์ฟเวอร์เท่านั้น จึงไม่ถูกเปิดเผยบนหน้าเว็บ

### 6. เผยแพร่เว็บ
เปิด Terminal ในโฟลเดอร์นี้ แล้วรันทีละคำสั่ง:

```bash
npx firebase-tools login
```

```bash
npx firebase-tools deploy --only firestore:rules,hosting
```

เสร็จแล้วจะได้ลิงก์ประมาณ `https://<project-id>.web.app` ส่งลิงก์นี้ให้ผู้เยี่ยมได้เลย

### 7. ทดสอบ
1. เปิดลิงก์ในหน้าต่างไม่ระบุตัวตน (Incognito) แล้วลองลงทะเบียน ช่องที่จองจะขึ้นสีแดงอ่อน คำว่า Busy
2. กด "เข้าสู่ระบบ Admin" ท้ายหน้า แล้วล็อกอินด้วยอีเมล Admin จะเห็นชื่อในปฏิทิน
3. ไปหน้า Gifts แล้วเพิ่มรายการของ

## หมายเหตุ
- ผู้เยี่ยมยกเลิกการจองเองไม่ได้ เพราะไม่มีการล็อกอิน ถ้าต้องการยกเลิก ให้แจ้ง Admin ไปลบให้
- เครื่องที่ใช้ลงทะเบียนจะจำการจองของตัวเองไว้ ช่องนั้นจะแสดงเป็นสีม่วงอ่อน คำว่า "ของคุณ"
- ถ้าแก้ไฟล์ในโฟลเดอร์ `public/` ให้รันคำสั่ง deploy ซ้ำอีกครั้ง
