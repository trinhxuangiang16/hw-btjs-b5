// MÔ hình 3 khối
/*
- input: Tên và số kw đã dùng
- Cách tính: 50kw đầu 500đ/kw, 50kw tiếp 650đ/kw, 100kw tiếp 860đ/kw, 150kw tiếp 1100đ/kw, còn lại 1300đ/kw
- Kết quả: Tến và số tiền điện tổng cộng phải đóng
*/

let tinhTienDien = function () {
  let name = document.getElementById("name").value;

  let soKwDaDung = document.getElementById("soKw").value * 1;
  let soTienPhaiDong;
  if (soKwDaDung <= 50) {
    soTienPhaiDong = soKwDaDung * 500;
  } else if (soKwDaDung > 50 && soKwDaDung <= 100) {
    let a = (soKwDaDung - 50) * 650;
    soTienPhaiDong = 50 * 500 + a;
  } else if (soKwDaDung > 100 && soKwDaDung <= 200) {
    let b = (soKwDaDung - 100) * 850;
    soTienPhaiDong = 50 * 500 + 50 * 650 + b;
  } else if (soKwDaDung > 200 && soKwDaDung <= 350) {
    let c = (soKwDaDung - 200) * 1100;
    soTienPhaiDong = 50 * 500 + 50 * 650 + 100 * 850 + c;
  } else if (soKwDaDung > 350) {
    let d = (soKwDaDung - 350) * 1300;
    soTienPhaiDong = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + d;
  } else {
    document.getElementById("ketQua").innerText =
      "Vui lòng nhập số kw thực tế đã dùng!";
  }
  document.getElementById(
    "ketQua"
  ).innerText = `Xin chào quý hộ ${name}! Số tiền điện bạn sẽ đóng là ${soTienPhaiDong.toLocaleString()} vnđ`;

  document.getElementById("name").value = "";
  document.getElementById("soKw").value = "";
};
