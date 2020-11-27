import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import styles from "./styles";
class rules extends Component {
  handleClose = () => {
    this.props.setOpenRules(false);
  };

  render() {
    const { openRules, classes } = this.props;
    return (
      <div>
        <Dialog open={openRules} onClose={this.handleClose} scroll="paper">
          <DialogContent>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div
                id="post-1754"
                className="post-1754 page type-page status-publish hentry"
              >
                <h2 className={classes.h2}>
                  I. ĐIỀU KHOẢN VÀ ĐIỀU KIỆN KHI SỬ DỤNG{" "}
                  <span style={{ color: "#EE4623" }}>CREDITONE</span>{" "}
                </h2>
                <p>
                  Đây có lẽ không phải là điều bạn thích nhưng xin bạn hãy đọc
                  kỹ những Điều khoản và Điều kiện này, bao gồm Chính sách Bảo
                  mật và Chính sách Cookie (gọi chung là “Điều khoản và Điều
                  kiện”). Tại sao? Vì khi ghé thăm, truy cập hay thu về bất kỳ
                  nội dung hoặc dữ liệu từ trang web của chúng tôi tại địa chỉ
                  creditone.vn (sau đây được gọi là “Trang web” hoặc “CreditOne
                  ”) hoặc khi có được hoặc sử dụng bất kì dịch vụ được cung cấp
                  thông qua Trang web của chúng tôi, nghĩa là bạn đã đồng ý bị
                  ràng buộc bởi những Điều khoản và Điều kiện này. Điều khoản và
                  Điều kiện được áp dụng dù bạn truy cập Trang web của chúng tôi
                  qua máy tính, một thiết bị duy động hay bất kỳ thiết bị nào
                  khác.
                </p>

                <p>
                  Bằng việc đồng ý bị ràng buộc bởi những Điều khoản và Điều
                  kiện này, bạn đã đồng ý tham gia một thỏa thuận ràng buộc pháp
                  lý với CreditOne. và những người thừa kế hợp pháp của công ty.
                  Nếu chúng tôi đề cập đến “chúng tôi” hoặc “của chúng tôi”
                  trong những Điều khoản và Điều kiện này, thì có nghĩa chúng
                  tôi đang nói đến CreditOne. Trang web và những dịch vụ chúng
                  tôi cung cấp qua Trang web đã được mang đến cho bạn sau khi đã
                  cân nhắc việc bạn cung cấp thông tin cho chúng tôi hoặc/và
                  việc bạn sử dụng Trang web và các dịch vụ được cung cấp thông
                  qua Trang web của chúng tôi.{" "}
                </p>

                <p>
                  Nếu bạn không hài lòng với Điều khoản và Điều kiện này và
                  không muốn chấp nhận tất cả điều khoản trong Điều khoản và
                  Điều kiện, chúng tôi rất tiếc phải nói lời tạm biệt với bạn ở
                  đây và đề nghị bạn ngưng sử dụng Trang web của chúng tôi ngay
                  lập tức.{" "}
                </p>

                <h2 className={classes.h2}>
                  II. CHÚNG TÔI LUÔN THÔNG BÁO KHI CÓ BẤT KÌ SỬA ĐỔI NÀO
                </h2>

                <p>
                  Có thể chúng tôi sẽ cần sửa đổi những Điều khoản và Điều kiện
                  này vào bất kì lúc nào. Trước khi sửa đổi Trang web, chúng tôi
                  sẽ thông báo đến bạn. Chúng tôi sẽ làm việc đó bằng cách đăng
                  một thông báo trên Trang web của chúng tôi ít nhất mười bốn
                  (14) ngày trước khi những thay đổi có hiệu lực và được thi
                  hành. Bạn sẽ bị ràng buộc bởi Điều khoản và Điều kiện sửa đổi
                  nếu bạn (tiếp tục) ghé thăm, truy cập hoặc sử dụng Trang web
                  của chúng tôi hoặc có được hay sử dụng bất kì dịch vụ được
                  cung cấp thông qua Trang web của chúng tôi sau khoảng thời
                  gian thông báo mười bốn (14) ngày kể trên kết thúc.
                </p>

                <p>
                  Một lần nữa, nếu bạn không hài lòng với Điều khoản và Điều
                  kiện sửa đổi của chúng tôi và bạn không muốn chấp nhận tất cả
                  điều khoản trong Điều khoản và Điều kiện sửa đổi, chúng tôi đề
                  nghị bạn ngưng sử dụng Trang web của chúng tôi ngay lập tức.
                </p>

                <h2 className={classes.h2}>
                  III. GIỚI THIỆU CHUNG VỀ CÁCH HOẠT ĐỘNG CỦA CREDITONE{" "}
                </h2>

                <p>
                  Chúng tôi là một trang web hỗ trợ tìm kiếm các dịch vụ tài
                  chính phổ biến và các sản phẩm ngân hàng khác nhau ở Việt Nam
                  được cung cấp dành cho khách hàng ở Việt Nam. Chúng tôi phối
                  hợp với nhiều công ty dịch vụ tài chính, các công ty môi giới
                  dịch vụ tài chính, các cơ quan dịch vụ tài chính, các tổ chức
                  tài chính và/hoặc các bên trung gian về các sản phẩm dịch vụ
                  tài chính khác (gọi chung là “Nhà cung cấp dịch vụ tài chính”
                  hoặc Các nhà cung cấp dịch vụ tài chính”) ở Việt Nam. Họ cung
                  cấp cho chúng tôi chi tiết về sản phẩm, giá cả và bất kì dữ
                  liệu nào khác có liên quan để lập ra thông tin so sánh giữa
                  giá cả và các lợi ích của sản phẩm. Chúng tôi không giả vờ so
                  sánh, hoặc không đảm bảo so sánh giá cả của tất cả các Nhà
                  cung cấp dịch vụ tài chính đang hoạt động tại Việt Nam. Rất có
                  thể có những công ty dịch vụ tài chính hoặc các bên trung gian
                  dịch vụ tài chính không liên kết với chúng tôi, vì vậy chúng
                  tôi không thể đưa họ vào danh sách so sánh và bạn sẽ không thể
                  tìm thấy sản phẩm của họ trên Trang web của chúng tôi.
                </p>

                <p>
                  Sau khi bạn nhập một số Dữ liệu Cá nhân cụ thể (như được định
                  nghĩa trong Chính sách Bảo mật của chúng tôi) và dữ liệu liên
                  quan khác, Trang web của chúng tôi sẽ tạo lập so sánh giá cả –
                  lợi ích cho sản phẩm dịch vụ tài chính mà bạn lựa chọn. Trang
                  web của chúng tôi sẽ hiển thị một danh sách Các nhà cung cấp
                  dịch vụ tài chính có cung cấp sản phẩm dịch vụ tài chính mà
                  bạn đã chọn với khung giá cả tương ứng cùng với một nút “chọn”
                  để bạn nhấn vào ở mỗi sản phẩm hiển thị. Nếu bạn nhấn nút
                  “chọn” một Nhà cung cấp dịch vụ tài chính nhất định, bạn sẽ
                  được điều hướng đến trang web của Nhà cung cấp dịch vụ tài
                  chính đó và một số Dữ liệu Cá nhân (như được nêu rõ trong
                  Chính sách Bảo mật) nhất định sẽ được tiết lộ và gửi đến Nhà
                  cung cấp dịch vụ tài chính đã chọn. Sau khi bạn đã được điều
                  hướng đến trang web của Nhà cung cấp dịch vụ tài chính, công
                  việc của chúng tôi đã hoàn thành. Chúng tôi không tham gia vào
                  bất kì cuộc thảo luận hay thương thảo nào giữa bạn và Nhà cung
                  cấp dịch vụ tài chính, hoặc trong việc bố trí hay mua bất kì
                  sản phẩm hoặc dịch vụ nào.
                </p>

                <h2 className={classes.h2}>
                  IV. PHƯƠNG THỨC LIÊN KẾT GIỮA CREDITONE VÀ CÁC NHÀ CUNG CẤP
                  DỊCH VỤ TÀI CHÍNH{" "}
                </h2>

                <p>
                  Chúng tôi tạo ra lợi nhuận chủ yếu từ phí thu từ các Nhà cung
                  cấp dịch vụ tài chính sau mỗi lần có một người truy cập được
                  điều hướng đến trang web của họ.
                </p>

                <p>
                  Chúng tôi không sở hữu hoặc kiểm soát bất kỳ Nhà cung cấp dịch
                  vụ tài chính, sản phẩm hoặc dịch vụ của Các nhà cung cấp dịch
                  vụ tài chính trên trang web của họ, cũng như không sở hữu,
                  kiểm soát hoặc điều hành trang web của các Nhà cung cấp dịch
                  vụ tài chính. Chúng tôi cung cấp đường dẫn đến trang web của
                  Các nhà cung cấp dịch vụ tài chính chỉ để bạn tham khảo cũng
                  như tạo sự thuận tiện cho bạn, và chúng tôi không nhận bất kì
                  trách nhiệm hoặc nghĩa vụ pháp lý nào liên quan đến những
                  trang web đó hoặc đối với bất kì mất mát hoặc tổn hại có thể
                  phát sinh do bạn sử dụng các trang web đó. Trang web của Các
                  nhà cung cấp dịch vụ tài chính rất có thể có những điều khoản
                  và điều kiện cũng như chính sách bảo mật của riêng họ và bạn
                  nên tham khảo những nội dung đó trước khi sử dụng trang web
                  của Nhà cung cấp dịch vụ tài chính có liên quan. Mọi sự tham
                  gia hoặc giao dịch mà bạn thực hiện với Nhà cung cấp dịch vụ
                  tài chính đều thuộc phạm vi trách nhiệm của bạn và bạn phải tự
                  chịu hoàn toàn rủi ro.{" "}
                </p>

                <p>
                  Những thông tin hiển thị trên Trang web của chúng tôi có liên
                  quan đến các Nhà cung cấp dịch vụ tài chính, sản phẩm và dịch
                  vụ của họ cũng như (kết quả của) phép so sánh giữa giá cả, lợi
                  ích, dặm bay hoặc khoản hoàn tiền được tạo ra (gọi là “Nội
                  dung So sánh”) đều dựa vào thông tin và dữ liệu chúng tôi nhận
                  được từ Nhà cung cấp dịch vụ tài chính và thông tin bạn cung
                  cấp thông qua Trang web của chúng tôi. Vì lý do đó, chúng tôi
                  không chịu bất kì trách nhiệm hoặc nghĩa vụ pháp lý nào về
                  tính chính xác, hoàn thiện hoặc đúng đắn của Nội dung So sánh,
                  cũng như không chịu trách nhiệm hoặc nghĩa vụ pháp lý cho bất
                  kì lỗi, sai sót hoặc thiếu sót nào về mặt này.
                </p>

                <p>
                  Như đã nói, chúng tôi là một trang web so sánh giá cả – lợi
                  ích, và hỗ trợ so sánh những sản phẩm dịch vụ tài chính phổ
                  biến của những Nhà cung cấp dịch vụ tài chính liên kết với
                  chúng tôi. Chúng tôi không phải là một công ty cung cấp các
                  dịch vụ tài chính hoặc trung gian về các dịch vụ tài chính. Vì
                  vậy, những nội dung hiển thị trên Trang web của chúng tôi, bao
                  gồm nhưng không giới hạn ở Nội dung So sánh, đều không gợi ý,
                  ám chỉ, thiết lập hay cấu thành một sự thừa nhận, chấp thuận,
                  giới thiệu hoặc lời khuyên liên quan đến Nhà cung cấp dịch vụ
                  tài chính hoặc các sản phẩm hay dịch vụ của họ dưới mọi hình
                  thức, bao gồm nhưng không giới hạn ở chất lượng hoặc tính phù
                  hợp của sản phẩm hoặc dịch vụ cho việc sử dụng (cá nhân) của
                  bạn. Nội dung So sánh (hay bấy kì phần nào trong đó) sẽ không
                  được coi hoặc hiểu là lời đề nghị hoặc khuyến khích mua bất kì
                  sản phẩm hoặc dịch vụ nào từ Nhà cung cấp dịch vụ tài chính
                  hoặc bất kì bên thứ ba nào khác về vấn đề đó.
                </p>

                <p>
                  Nếu cuối cùng bạn quyết định mua một sản phẩm hoặc dịch vụ từ
                  một Nhà cung cấp dịch vụ tài chính, bạn sẽ tham gia vào một
                  thỏa thuận với Nhà cung cấp dịch vụ tài chính đó, chứ không
                  phải với chúng tôi. Vì vậy, chúng tôi không chịu bất kì trách
                  nhiệm hay nghĩa vụ pháp lý nào đối với việc mua sản phẩm dịch
                  vụ của bạn, đối với tính thích hợp hoặc chất lượng của sản
                  phẩm hay các dịch vụ hoặc của thỏa thuận mà bạn kí kết với Nhà
                  cung cấp dịch vụ tài chính.{" "}
                </p>

                <h2 className={classes.h2}>V. TRÁCH NHIỆM CỦA NGƯỜI DÙNG</h2>

                <p>Bạn đồng ý chịu trách nhiệm những điều sau đây:</p>

                <p>
                  a. Bạn sẽ chỉ sử dụng Trang web của chúng tôi nếu bạn đã đủ 18
                  tuổi trở trên, và chỉ dùng với mục đích cá nhân, phi thương
                  mại;
                  <br />
                  b. Nếu bạn tạo một tài khoản thông qua Trang web của chúng tôi
                  hoặc thông qua tài khoản Facebook hoặc nếu (trong trường hợp
                  khác) gửi bất kì Dữ liệu Cá nhân (như được định nghĩa trong
                  Chính sách Bảo mật của chúng tôi) hoặc những dữ liệu khác cho
                  chúng tôi, bạn phải đảm bảo những dữ liệu cung cấp là đúng
                  đắn, có tính hiện thời, chính xác và hoàn thiện;
                </p>

                <p>
                  c. Bạn có trách nhiệm luôn cập nhật và đảm bảo tính chính xác
                  cho Dữ liệu Cá nhân của mình;
                  <br />
                  d. Bạn có trách nhiệm bảo vệ tính bảo mật cho tài khoản của
                  mình (tên người dùng và mật khẩu), bạn sẽ không chia sẻ thông
                  tin tài khoản với bất kì người nào khác và sẽ báo cho chúng
                  tôi biết nếu bạn nghi ngờ bất kì hoạt động trái phép nào trên
                  tài khoản của mình;
                </p>

                <p>
                  e. Bạn sẽ không sử dụng Trang web hoặc các dịch vụ của chúng
                  tôi cho bất kì mục đích trái luật hoặc phi pháp nào;
                  <br />
                  f. Bạn sẽ không vi phạm bất kì biện pháp công nghệ nào được
                  đưa ra trên Trang web của chúng tôi hoặc bỏ qua, tránh né,
                  loại bỏ, vô hiệu hóa, tháo gỡ, giải mã hoặc làm suy yếu bất kỳ
                  biện pháp nào được chúng tôi thiết đặt hoặc sử dụng để ngăn
                  chặn hoặc hạn chế quyền truy cập vào (các phần trong) Trang
                  web của chúng tôi, IP Trang web (như được định nghĩa từ đây
                  trong khoản 14 của Điều khoản và Điều kiện) hoặc truy cập vào
                  các nội dung;
                </p>

                <p>
                  g. Bạn sẽ không tạo đường dẫn từ bất kì trang web nào dẫn đến
                  Trang web của chúng tôi;
                  <br />
                  h. Bạn sẽ không sử dụng bất kì phần mềm, công cụ hoặc thiết bị
                  nào để (cố) can thiệp vào Trang web hoặc hoạt động hợp thức
                  của Trang web của chúng tôi;
                </p>

                <p>
                  i. Bạn có trách nhiệm kiểm tra và đảm bảo tính thích hợp, hữu
                  ích, chất lượng, tính đầy đủ và sẵn có của sản phẩm hoặc dịch
                  vụ của Nhà cung cấp dịch vụ tài chính hiển thị trên Trang web
                  của chúng tôi để phục vụ mục đích sử dụng của cá nhân bạn,
                  hoặc nếu thấy cần thiết hoặc nếu muốn, bạn nên tìm kiếm và
                  nhận lời khuyên từ chuyên gia về sản phẩm trước khi đưa ra bất
                  kì quyết định mua nào.
                </p>

                <h2 className={classes.h2}>
                  VI. DỮ LIỆU CÁ NHÂN, BẢO MẬT VÀ COOKIE
                </h2>

                <p>
                  Chúng tôi chú trọng việc bảo vệ dữ liệu cá nhân của bạn và
                  chúng tôi đưa ra thêm thông tin và chi tiết trong Chính sách
                  Bảo mật và Chính sách Cookie của chúng tôi. Chính sách Bảo mật
                  và Chính sách Cookie của chúng tôi là một phần không thể thiếu
                  trong Điều khoản và Điều kiện này.
                </p>

                <h2 className={classes.h2}>
                  WEBSITE NÀY LÀ CỦA CHÚNG TÔI (NGOÀI RA, MỘT SỐ NỘI DUNG THUỘC
                  VỀ CÁC NHÀ CUNG CẤP DỊCH VỤ TÀI CHÍNH)
                </h2>

                <p>
                  Trang web của chúng tôi chứa khá nhiều dữ liệu được bảo vệ bởi
                  luật và quy định về sở hữu trí tuệ. Cụ thể, chúng tôi là chủ
                  sở hữu của Trang web và tất cả những dữ liệu và nội dung hiển
                  thị trên Trang web bao gồm nhưng không giới hạn ở những hình
                  ảnh về chú gấu của chúng tôi, tất cả những hình ảnh, văn bản,
                  kí hiệu, biểu tượng, thiết kế, thương hiệu, hình ảnh đồ họa,
                  các tập tin và bản quyền, ngoại trừ những dữ liệu trên Trang
                  web của chúng tôi mà thuộc sở hữu hoặc được cấp phép cho các
                  Nhà cung cấp dịch vụ tài chính hoặc các bên thứ ba có liên
                  quan khác mà chúng tôi làm việc cùng (được gọi chung là “IP
                  Trang web”) và nội dung do bạn hoặc người dùng khác đăng trên
                  Trang web của chúng tôi. Tất cả các quyền đó đều được bảo lưu.
                </p>

                <p>
                  Trừ những trường hợp được phép sử dụng Trang web và các dịch
                  vụ của chúng tôi cho mục đích cá nhân tuân theo Điều khoản và
                  Điều Kiện, bạn không được sử dụng, sao chép, chuyển giao, tạo
                  liên kết sâu, tạo siêu liên kết, dùng công cụ sao chép nội
                  dung (scrape), tải về, trưng bày, nhân bản, bán, trao đổi,
                  tiếp thị, sử dụng, khai thác, xuất bản, phân phối, phát sóng
                  hoặc tái tạo IP Trang web hoặc bất kì phần nào trong đó, trừ
                  khi bạn đã có được sự chấp thuận bằng văn bản trước từ phía
                  chúng tôi, từ Nhà cung cấp dịch vụ tài chính có liên quan,
                  hoặc các bên thứ ba có liên quan khác mà chúng tôi làm việc
                  cùng, tùy theo trường hợp nào áp dụng. Bạn có thể liên hệ với
                  chúng tôi tại địa chỉ hotro@creditone.vn
                </p>

                <h2 className={classes.h2}>
                  VIII. KHƯỚC TỪ TRÁCH NHIỆM ĐẠI DIỆN VÀ BẢO HÀNH
                </h2>

                <p>
                  Trang web của chúng tôi, Nội dung So sánh và những dịch vụ
                  được chúng tôi cung cấp thông qua Trang web được cung cấp dựa
                  trên cơ sở “nguyên trạng” và “như sẵn có”. Mặc dù chúng tôi sẽ
                  sử dụng các biện pháp hợp lý để đảm bảo tính chính xác cho nội
                  dung trên Trang web của chúng tôi bao gồm nhưng không giới hạn
                  ở Nội dung So sánh, chúng tôi không thực hiện hoặc đưa ra bất
                  kì sự đại diện, bảo đảm hoặc bảo lãnh rõ ràng hay ngụ ý ở bất
                  cứ loại nào liên quan đến Trang web của chúng tôi, Nội dung So
                  sánh, các dịch vụ được cung cấp thông qua Trang web của chúng
                  tôi hoặc (nội dung của) các trang web của Các nhà cung cấp
                  dịch vụ tài chính mà bạn có thể được chuyển hướng đến bao gồm
                  nhưng không giới hạn ở bất kì sự đại diện, bảo hành hoặc bảo
                  lãnh nào về tiêu đề, tính không vi phạm, tính phù hợp, tính
                  đúng đắn, tính hữu dụng, tính chính xác, tính đầy đủ, tính kịp
                  thời, tính bảo mật, tính hiện thời, chất lượng hoặc tính phù
                  hợp cho một mục đích cụ thể bao gồm nhưng không giới hạn ở mục
                  đích sử dụng cá nhân của riêng bạn.
                </p>

                <p>
                  Hơn nữa, chúng tôi không thực hiện hoặc đưa ra bất kì sự đại
                  diện, bảo đảm hoặc bảo lãnh rõ ràng hay ngụ ý nào về việc
                  không bị gián đoạn, gặp lỗi, khiếm khuyết, virus hoặc tính kịp
                  thời và an toàn khi bạn truy cập hoặc sử dụng Trang web của
                  chúng tôi, Nội dung So sánh, các dịch vụ được chúng tôi cung
                  cấp thông qua Trang web hoặc (nội dung của) các trang web của
                  Các nhà cung cấp dịch vụ tài chính.
                </p>

                <h2 className={classes.h2}>IX. GIỚI HẠN NGHĨA VỤ PHÁP LÝ</h2>

                <p>
                  Chúng tôi, cùng với các giám đốc, cán bộ, thành viên, nhân
                  viên, đại diện và các chi nhánh của chúng tôi, đều không chịu
                  bất kì và toàn bộ nghĩa vụ pháp lý đối với mọi tổn thất hoặc
                  thiệt hại theo bất kì thể loại nào dù phát sinh từ hợp đồng,
                  sai lầm cá nhân, trách nhiệm bồi thường nghiêm ngặt hoặc liên
                  quan đến việc chuyển hướng bạn đến trang web của Các nhà cung
                  cấp dịch vụ tài chính và liên quan đến những tương tác và giao
                  dịch sau đó giữa bạn với Các nhà cung cấp dịch vụ tài chính.
                </p>

                <p>
                  Chúng tôi, cùng với các giám đốc, cán bộ, thành viên, nhân
                  viên, đại diện và các chi nhánh của chúng tôi, không chịu bất
                  kì và tất cả nghĩa vụ pháp lý nào đối với bất kì tổn thất hoặc
                  thiệt hại theo bất kì thể loại nào dù phát sinh từ hợp đồng,
                  sai lầm cá nhân, trách nhiệm bồi thường nghiêm ngặt hoặc liên
                  quan đến việc mua, hoặc dự kiến mua một sản phẩm hoặc dịch vụ
                  từ một Nhà cung cấp dịch vụ tài chính hoặc trách nhiệm đối với
                  việc sử dụng hoặc phụ thuộc vào bất kì Nội dung So sánh nào.{" "}
                </p>

                <p>
                  Chúng tôi, cùng với các giám đốc, cán bộ, thành viên, nhân
                  viên, đại diện và các chi nhánh của chúng tôi, không chịu bất
                  kì và tất cả nghĩa vụ pháp lý nào đối với mọi tổn thất hoặc
                  thiệt hại phát sinh từ hoặc liên quan đến:
                </p>

                <p>
                  a. bất kì loại virus hoặc tài sản gây hại khác có thể lây
                  nhiễm máy tính, chương trình hoặc hệ thống máy tính của bạn
                  hoặc những tài liệu độc quyền khác mà bạn gặp phải do ghé thăm
                  hay truy cập Trang web của chúng tôi, Nội dung So sánh hoặc sử
                  dụng các dịch vụ được cung cấp thông qua Trang web của chúng
                  tôi, hoặc (nội dung của) trang web của Các nhà cung cấp dịch
                  vụ tài chính mà bạn có thể được chuyển hướng đến; hoặc
                </p>

                <p>
                  b. những sự kiện bất khả kháng ngoài tầm kiểm soát hợp lý của
                  chúng tôi bao gồm nhưng không giới hạn ở bùng nổ chiến tranh,
                  đình công và các trường hợp bất khả kháng.
                </p>

                <p>
                  Trong mọi trường hợp và tình huống, chúng tôi đều không chịu
                  trách nhiệm đối với bất kì tổn thất nào về lợi nhuận hay tiết
                  kiệm dự kiến hoặc đối với bất kì thiệt hại gián tiếp, đặc
                  biệt, mang tính trừng phạt, ngẫu nhiên hoặc là hậu quả của bất
                  kì thể loại nào bao gồm nhưng không giới hạn ở việc dù là phát
                  sinh từ hợp đồng, sai lầm cá nhân, trách nhiệm bồi thường
                  nghiêm ngặt hoặc có liên quan đến (việc sử dụng) Trang web của
                  chúng tôi, Nội dung So sánh, các dịch vụ được cung cấp thông
                  qua Trang web của chúng tôi hoặc (nội dung của) trang web của
                  Các nhà cung cấp dịch vụ tài chính mà bạn có thể được chuyển
                  hướng đến.{" "}
                </p>

                <p>
                  Trong mọi trường hợp, trách nhiệm pháp lý tổng hợp của chúng
                  tôi đối với bất kì tổn thất hoặc thiệt hại dù phát sinh từ hợp
                  đồng, sai lầm cá nhân, trách nhiệm bồi thường nghiêm ngặt hoặc
                  liên quan đến (việc sử dụng) Trang web của chúng tôi, Nội dung
                  So sánh, các dịch vụ được cung cấp thông qua Trang web của
                  chúng tôi hoặc (nội dung của) trang web của các Nhà cung cấp
                  dịch vụ tài chính mà bạn có thể được chuyển hướng đến, được
                  giới hạn ở mức 1 triệu đồng.
                </p>

                <p>
                  Tất cả các trường hợp loại trừ và giới hạn trách nhiệm trong
                  Điều khoản và Điều Kiện đều theo mức tối đa được luật pháp cho
                  phép.
                </p>

                <h2 className={classes.h2}>X. BỒI THƯỜNG</h2>

                <p>
                  Bạn đồng ý không hủy ngang việc bồi thường và không để chúng
                  tôi bị chịu tổn hại đối với và trước bất kì khiếu nại, trách
                  nhiệm, tổn thất, thiệt hại và chi phí (bao gồm nhưng không
                  giới hạn ở chi phí pháp lý hợp lý) phát sinh từ hoặc liên quan
                  đến (i) việc sử dụng và/hoặc lạm dụng Trang web của chúng tôi;
                  (ii) vi phạm một trong các điều khoản của Điều khoản và Điều
                  Kiện; (iii) vi phạm bất kì quyền sở hữu trí tuệ bao gồm nhưng
                  không giới hạn ở IP Trang web; hoặc (iv) bất kì khiếu nại nào
                  từ bên thứ ba chống lại chúng tôi phát sinh từ hoặc liên quan
                  đến các sự kiện được đề cập ở mục (i), (ii) hoặc (iii) bên
                  trên, chỉ trừ khi những khiếu nại, trách nhiệm, tổn thất,
                  thiệt hại hay chi phí liên quan trực tiếp đến các hành vi hay
                  thiếu sót của chúng tôi.
                </p>

                <h2 className={classes.h2}>
                  XI. NHỮNG ĐIỀU KHOẢN CẦN GHI NHỚ KHÁC
                </h2>

                <p>
                  Chúng tôi có quyền chấm dứt, đình chỉ hoặc ngừng việc sử dụng
                  và truy cập của bạn vào Trang web của chúng tôi và chúng tôi
                  có quyền hủy bỏ tài khoản của bạn tại mọi thời điểm mà không
                  cần báo trước và không cần phải cung cấp bất kì lý do nào.
                </p>

                <p>
                  Nếu chúng tôi không thể thực hiện hoặc thực thi các quyền của
                  chúng tôi trong Điều khoản và Điều kiện này, điều này sẽ không
                  được coi hay không được hiểu là chúng tôi từ bỏ quyền đó;
                  chúng tôi sẽ vẫn có quyền thực hiện hoặc thực thi các quyền
                  này trong tương lai tại bất kì thời điểm nào.
                </p>

                <p>
                  Trong trường hợp bất kì điều khoản nào của Điều khoản và Điều
                  kiện này không thể thực hiện được, không có hiệu lực, không có
                  giá trị, không thể áp dụng hoặc không hợp lệ trong bất cứ
                  quyền hạn pháp lý nào, điều khoản đó sẽ được thay thế bởi một
                  điều khoản có hiệu lực và có thể thi thi hành gần giống nhất
                  với (mục đích của) điều khoản ban đầu và tất cả các điều khoản
                  khác của Điều khoản và Điều kiện sẽ vẫn có đầy đủ hiệu lực thi
                  hành.
                </p>

                <p>
                  Điều khoản và Điều kiện này tạo thành toàn bộ thỏa thuận giữa
                  bạn và chúng tôi và sẽ thay thế cho bất kì và tất cả các thỏa
                  thuận bằng lời nói hoặc bằng văn bản nào trước đây có liên
                  quan đến Trang web của chúng tôi hoặc việc sử dụng các dịch vụ
                  được cung cấp thông qua Trang web của chúng tôi.
                </p>

                <h2 className={classes.h2}>
                  XII. LUẬT PHÁP VÀ GIẢI QUYẾT TRANH CHẤP
                </h2>

                <p>
                  Chúng tôi không thích tranh cãi, nhưng trong trường hợp không
                  may chúng tôi bị rơi vào tình huống tranh chấp, xin lưu ý rằng
                  Điều khoản và Điều kiện này sẽ chỉ bị chi phối bởi luật pháp
                  của Việt Nam và chúng ta (cả bạn và chúng tôi) phải gửi mọi vụ
                  việc tranh chấp hoặc khiếu nại lên thẩm quyền độc quyền của
                  các tòa án Việt Nam.
                </p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(rules);
