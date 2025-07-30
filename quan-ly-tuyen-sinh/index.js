let traKetQua = function () {
  document.getElementById("ketQua").innerText = "Kết quả thi của bạn là";

  let diemChuan = document.getElementById("diemChuan").value * 1;

  let diemMon1 = document.getElementById("mon1").value * 1;
  let diemMon2 = document.getElementById("mon2").value * 1;
  let diemMon3 = document.getElementById("mon3").value * 1;

  let khuVuc = document.getElementById("khuVuc").value;

  let diemKhuVuc;
  if (khuVuc === "A" || khuVuc === "a") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B" || khuVuc === "b") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C" || khuVuc === "c") {
    diemKhuVuc = 0.5;
  } else if (khuVuc === "X" || khuVuc === "x") {
    diemKhuVuc = 0;
  } else {
    diemKhuVuc = 0;
  }
  console.log(diemKhuVuc);
  console.log(typeof diemKhuVuc);

  let doiTuong = document.getElementById("doiTuong").value;
  let diemDoiTuong;

  if (doiTuong === "1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong === "2") {
    diemDoiTuong = 1.5;
  } else if (doiTuong === "3") {
    diemDoiTuong = 1;
  } else if (doiTuong === "0") {
    diemDoiTuong = 0;
  } else {
    diemDoiTuong = 0;
  }
  console.log(diemDoiTuong);
  console.log(typeof diemDoiTuong);

  diemUuTien = diemKhuVuc + diemDoiTuong;

  let diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("ketQua").innerText =
      "Bạn đã không vượt qua kì thi do có môn bạn thi được 0 điểm. Chúc may mắn lần sau!";
  } else if (diemTongKet < diemChuan) {
    document.getElementById("ketQua").innerText =
      "Bạn đã không vượt qua kì thi do bạn không đủ điểm chuẩn. Chúc may mắn lần sau!";
  } else {
    document.getElementById(
      "ketQua"
    ).innerText = `Bạn đã thi đậu với tổng điểm là ${diemTongKet} điểm. Trong đó đã bao gồm điểm khu vực là ${diemKhuVuc} điểm và Điểm đối tượng là ${diemDoiTuong} điểm `;
  }

  document.getElementById("mon1").value = "";
  document.getElementById("mon2").value = "";
  document.getElementById("mon3").value = "";
  document.getElementById("doiTuong").value = "";
  document.getElementById("khuVuc").value = "";
  document.getElementById("diemChuan").value = "";
};
