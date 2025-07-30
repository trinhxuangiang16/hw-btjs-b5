//Mô hình 3 khối
/*
- input: số kênh thuê, nếu là doanh nghiệp thì có số đầu kết nối. mã kh, loại kh
- Cách tính: Giá cáp = phí xử lý + dv cơ bản + Thuê kênh
- kết quả: Giá cáp
*/

let handleChon = function () {
  let doiTuongDuocChon = document.querySelector(
    'input[name="doiTuong"]:checked'
  ).value;
  console.log(doiTuongDuocChon);
  let ketNoi = document.getElementById("wrap-soKetNoi");

  if (doiTuongDuocChon === "doanh-nghiep") {
    ketNoi.style.display = "block";
  } else {
    ketNoi.style.display = "none";
    document.getElementById("soKetNoi").value = 0;
  }
};

let tinhGiaCap = function () {
  let maKh = document.getElementById("maKhachHang").value;

  let soKenhCC = document.getElementById("kenhCaoCap").value * 1;

  let soKetNoi = document.getElementById("soKetNoi").value * 1;

  let phiDvCb;
  if (soKetNoi <= 10 && soKetNoi !== 0) {
    phiDvCb = 75;
  } else if (soKetNoi > 10) {
    phiDvCbHon10 = soKetNoi - 10;
    phiDvCb = 75 + phiDvCbHon10 * 5;
  } else if (soKetNoi === 0) {
    phiDvCb = 20.5;
  }

  let tinhGiaCap;
  if (soKetNoi === 0) {
    // soKetNoi = 0;
    tinhGiaCap = 4.5 + phiDvCb + soKenhCC * 7.5;
    console.log(tinhGiaCap);
  } else if (soKetNoi !== 0) {
    tinhGiaCap = 15 + phiDvCb + soKenhCC * 50;
    console.log(tinhGiaCap);
  }

  console.log(tinhGiaCap);

  document.getElementById(
    "ketQua"
  ).innerText = `Tiền cáp phải trả của bạn là ${tinhGiaCap} $`;

  document.getElementById("soKetNoi").value = "";
  document.getElementById("kenhCaoCap").value = "";
  document.getElementById("maKhachHang").value = "";
};
