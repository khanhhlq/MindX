export const TYPE_LOG = 'log'; // Export dạng nhiều biến, hàm không giới hạn
export const TYPE_WARN = 'warn'; // Export dạng nhiều biến, hàm không giới hạn
export const TYPE_ERROR = 'error'; // Export dạng nhiều biến, hàm không giới hạn

function logger(log, type = TYPE_LOG){
    console[type](log);
}

export default logger; // Kiểu export mặc định