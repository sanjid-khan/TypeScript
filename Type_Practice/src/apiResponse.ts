interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

const sendResponse = <T>(data: T): ApiResponse<T> => {
  return {
    success: true,
    data,
  };
};
