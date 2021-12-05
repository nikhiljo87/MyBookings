import api from './Api';

class BookingAPIService {
    getAllList() {
      return api.get('/getBookingList');
    }
}

export default new BookingAPIService();