export interface ParkingSlot {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  available: boolean;
  price: number;
  type: 'regular' | 'handicap' | 'electric';
}

export interface Booking {
  id: string;
  userId: string;
  slotId: string;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}