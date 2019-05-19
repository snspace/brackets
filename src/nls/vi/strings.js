/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(lỗi {0})",
    "NOT_FOUND_ERR": "Không thấy tập tin /directory.",
    "NOT_READABLE_ERR": "Không thể đọc tập tin /directory.",
    "EXCEEDS_MAX_FILE_SIZE": "Không thể mở các tệp lớn hơn {0} MB trong {APP_NAME}.",
    "FILE_EXISTS_ERR": "Tệp hoặc thư mục đã tồn tại.",
    "FILE": "tập tin",
    "FILE_TITLE": "Tập tin",
    "DIRECTORY": "thư mục",
    "DIRECTORY_TITLE": "Thư mục",
    "DIRECTORY_NAMES_LEDE": "Tên thư mục",
    "FILENAMES_LEDE": "Tên tập tin",
    "FILENAME": "Tên tập tin",
    "DIRECTORY_NAME": "Tên thư mục",
    "ERROR_OUT_OF_SPACE_TITLE": "Đã đạt đến giới hạn kích thước dự án",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Tổng kích thước của các tập tin trong dự án của bạn đã vượt quá dung lượng trống tối đa. Bạn sẽ không thể thêm bất kỳ tệp mới nào cho đến khi bạn xóa một số tập tin hiện có để giải phóng dung lượng.",
    "FILE_EXISTS_HEADER": "Tập tin đã tồn tại.",
    "OPEN_DIALOG_ERROR": "Đã xảy ra lỗi khi hiển thị hộp thoại tập tin đang mở. (lỗi {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Đã xảy ra lỗi khi đọc nội dung của thư mục <span class='dialog-filename'>{0}</span>. (lỗi {1})",
    "ERROR_OPENING_FILE_TITLE": "Lỗi khi mở tập tin",
    "ERROR_OPENING_FILE": "Đã xảy ra lỗi khi cố mở tập tin <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "Đã xảy ra lỗi khi cố mở các tập tin sau:",
    "ERROR_SAVING_FILE_TITLE": "Lỗi khi lưu tệp",
    "ERROR_SAVING_FILE": "Đã xảy ra lỗi khi cố lưu tập tin <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Lỗi khi đổi tên tệp",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Lỗi khi đổi tên thư mục",
    "ERROR_RENAMING_FILE": "Đã xảy ra lỗi khi cố đổi tên tập tin <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "Đã xảy ra lỗi khi cố đổi tên thư mục <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Lỗi khi xóa tập",
    "ERROR_DELETING_DIRECTORY_TITLE": "Lỗi khi xóa thư mục",
    "ERROR_DELETING_FILE": "Đã xảy ra lỗi khi cố xóa tập tin <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Đã xảy ra lỗi khi cố xóa thư mục <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Tên tập tin không hợp lệ",
    "INVALID_DIRNAME_TITLE": "Tên thư mục không hợp lệ",
    "INVALID_FILENAME_MESSAGE": "Tên tập tin không thể sử dụng bất kỳ từ dành riêng cho hệ thống nào, kết thúc bằng dấu chấm (.) hoặc sử dụng bất kỳ ký tự nào sau đây: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Tên thư mục không thể sử dụng bất kỳ từ dành riêng cho hệ thống nào, kết thúc bằng dấu chấm (.) hoặc sử dụng bất kỳ ký tự nào sau đây: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Một tệp hoặc thư mục có tên <span class='dialog-filename'>{0}</span> đã tồn tại.",
    "ERROR_CREATING_FILE_TITLE": "Lỗi khi tạo tập tin",
    "ERROR_CREATING_DIRECTORY_TITLE": "Lỗi khi tạo thư mục",
    "ERROR_CREATING_FILE": "Đã xảy ra lỗi khi cố gắng tạo tập tin <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "Đã xảy ra lỗi khi cố tạo thư mục <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "Lỗi khi lập chỉ mục tệp",
    "EXT_MODIFIED_TITLE": "Thay đổi bên ngoài",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> đã được sửa đổi trên đĩa bên ngoài {APP_NAME}.<br /><br />Bạn có muốn lưu tệp và ghi đè những thay đổi đó không?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> đã được sửa đổi trên đĩa bên ngoài {APP_NAME}, nhưng cũng có các thay đổi chưa lưu trong {APP_NAME}.<br /><br />Phiên bản nào bạn muốn giữ lấy?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> đã bị xóa trên đĩa bên ngoài {APP_NAME}, nhưng có các thay đổi chưa được lưu trong {APP_NAME}.<br /><br />Bạn có muốn giữ thay đổi của bạn?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Xác nhận xóa",
    "CONFIRM_FOLDER_DELETE": "Bạn có chắc chắn muốn xóa thư mục <span class='dialog-filename'>{0}</span> không?",
    "CONFIRM_FILE_DELETE": "Bạn có chắc chắn muốn xóa <span class='dialog-filename'>{0}</span> không?",
    "FILE_DELETED_TITLE": "Đã xóa tập tin",
    "DONE": "Xong",
    "OK": "OK",
    "CANCEL": "Hủy bỏ",
    "SAVE_AND_OVERWRITE": "Ghi đè",
    "DELETE": "Xóa",
    "BUTTON_YES": "Có",
    "BUTTON_NO": "Không",
    "USE_IMPORTED": "Sử dụng tập tin mới",
    "KEEP_EXISTING": "Giữ tập tin hiện có",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Không có Chỉnh sửa nhanh cho vị trí con trỏ hiện tại",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Chỉnh sửa nhanh CSS: đặt con trỏ trên tên lớp đơn",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Chỉnh sửa nhanh CSS: thuộc tính lớp không đầy đủ",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Chỉnh sửa nhanh CSS: thuộc tính id không hoàn chỉnh",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Chỉnh sửa nhanh CSS: đặt con trỏ vào thẻ, lớp hoặc id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Chức năng thời gian CSS Chỉnh sửa nhanh: cú pháp không hợp lệ",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Quick Edit: đặt con trỏ vào tên hàm",
    "BUTTON_NEW_RULE": "Quy tắc mới",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Không có Tài liệu nhanh nào cho vị trí con trỏ hiện tại",
    "CMD_FILE_NEW": "Tập tin mới",
    "CMD_FILE_NEW_FOLDER": "Thư mục mới",
    "CMD_FILE_RENAME": "Đổi tên",
    "CMD_FILE_DELETE": "Xóa",
    "CMD_FILE_DOWNLOAD": "Tải về",
    "CMD_CUT": "Cắt",
    "CMD_COPY": "Sao chép",
    "CMD_PASTE": "Dán",
    "CMD_SELECT_ALL": "Chọn toàn bộ",
    "CMD_TOGGLE_QUICK_EDIT": "Chỉnh sửa nhanh",
    "CMD_TOGGLE_QUICK_DOCS": "Tài liệu nhanh",
    "DND_MAX_SIZE_EXCEEDED": "tập tin vượt quá kích thước được hỗ trợ tối đa: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "loại tập tin không được hỗ trợ",
    "DND_ERROR_UNZIP": "không thể giải nén tập tin zip",
    "DND_ERROR_UNTAR": "không thể giải nén tập tin tar",
    "DND_SUCCESS_UNZIP_TITLE": "Đã giải nén tập tin zip thành công",
    "DND_SUCCESS_UNTAR_TITLE": "Đã giải nén tập tin tar thành công",
    "DND_FILE_REPLACE": "Một tập tin có tên <span class='dialog-filename'>{0}</span> đã tồn tại. Bạn có muốn sử dụng tập tin mới hoặc giữ tập tin hiện tại?",
    "IMAGE_FILE_TITLE": "Tập tin hình ảnh",
    "IMAGE_DIMENSIONS_1": "{0} &lần; {1} pixel",
    "IMAGE_ALT_TEXT": "Mô tả hình ảnh",
    "IMAGE_FILTERS_TITLE": "Bộ lọc hình ảnh"
});
