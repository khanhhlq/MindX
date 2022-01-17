Flexbox Layout (hay còn gọi là Flexible Box) là một kiểu bố cục trang có khả năng tự cân đối kích thước, thay đổi chiều rộng/chiều cao và thứ tự phần tử bên trong để phù hợp với tất cả các loại thiết bị hiển thị và kích thước màn hình.

- Giới thiệu display: flex (flexbox).

    + Flex là gì ?
        ^ 1 layout pattern: mộ trong những pattern giúp mình dễ dàng thiết kế layout linh hoạt, Phân chia không gian giưa items, sắp xếp trái -> phải, trên -> dưới, khoảng cách, thứ tự của các items trong 1 container

    + Flex có công dụng gì trong trang web?
        ^ Cấu trúc: 2 phần chính 
            * Hộp chứa cha (flex-container)
            * Các phần tử con nằm trong cha


Thuộc tính của flex container
- display
- flex-direction: Để đinh huong hiển thị của các item con, việc thay đổi hướng hiện thị flex có thể cho phép ta thay đổi vị trí của các item.
- flex-wrap: DÙng để kiểm soát việc bọc các items nằm gọn trong container. Nếu chúng ta giảm chiều rộng của trình duyệt, chúng ta có thể ko nhìn thấy một số item trên cùng 1 dòng.
- flex-flow: kết hợp của flex-direction và flex-wrap;
- justify-content: Dùng để căn chỉnh vị trí của các items so với trục chính. có 6 giá trị justify-content
    + flex-start: vị trí bắt đầu
    + flex-end: vị trí cuối cùng
    + center: đặt tất cả item ở giữa
    + space-between: sẽ chia đều khoảng cách thừa và thêm nó giữa các item.
    + space-around: chia khoảng cách ở đầu và cuối,. Khoảng cách ở đầu và cuối sẽ = 1/2 khoảng cách giữa các items (các con) với nhau.
    + space-evenly: Chia khoảng cách đều các khoảng cách giữa các item với nhau:

- align-items: dùng để xác định cách mà các flex item được đặt trong container
- align-content
