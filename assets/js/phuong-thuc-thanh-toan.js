    // Hàm tạo mã hóa đơn ngẫu nhiên chỉ chứa số
    function generateInvoiceCode() {
        const invoiceCode = Math.floor(Math.random() * 1000000000);  // Tạo số ngẫu nhiên từ 0 đến 999999999
        document.getElementById('invoiceCode').value = invoiceCode;
    }

    // Gọi hàm tạo mã hóa đơn khi trang được tải
    window.onload = generateInvoiceCode;