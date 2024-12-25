const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4825',
    database: 'mysql'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

app.get('/api/deposit', (req, res) => {
    db.query('SELECT * FROM deposit', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/withdrawal', (req, res) => {
    db.query('SELECT * FROM withdrawal', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/user', (req, res) => {
    db.query('SELECT * FROM buser', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/customer/register_update', (req, res) => {
    const { user_id, user_nick, user_pw, user_pw_re, hp, mb_bank, bank_no, bank_account, rec} = req.query;

    // SQL 쿼리 작성
   
    // 오늘 날짜 가져오기
    const now = new Date();
    const formattedDate = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0') + ' ' +
    String(now.getHours()).padStart(2, '0') + ':' +
    String(now.getMinutes()).padStart(2, '0') + ':' +
    String(now.getSeconds()).padStart(2, '0');


    const sql = 'INSERT INTO buser(bid, bnick, bpass, bpass2, bphone, bno, baccount, baname, bcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    

    // 쿼리 실행
    db.query(sql, [ user_id, user_nick, user_pw, user_pw_re, hp, mb_bank, bank_no, bank_account, rec], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: '데이터 삽입 오류' });
        }

        // 응답에 모든 쿼리 파라미터 포함
        res.status(201).json({
            message: '사용자 추가 성공',
            userId: results.insertId           
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
