export interface User {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  emailVisibility: boolean;
  id: string;
  updated: Date;
  userName: string;
  email: string;
  verified: boolean;
}

export enum Type {
  Beauty = "beauty",
  Hospital = "hospital",
  Restaurant = "restaurant",
}
export interface Tag {
  collectionId: CollectionID;
  collectionName: CollectionName;
  created: Date;
  id: string;
  text: string;
  type: Type[];
  updated: Date;
}

export interface Place {
  address: string;
  collectionId: CollectionID;
  collectionName: CollectionName;
  created: Date;
  id: string;
  placeName: string;
  price: number;
  type: Type;
  updated: Date;
}

export interface Review {
  collectionId: string;
  collectionName: string;
  created: Date;
  id: string;
  img: string;
  place: string;
  tags: string[];
  text: string;
  updated: Date;
  userName: string;
}

export interface VisitRecord {
  collectionId: string;
  collectionName: string;
  created: Date;
  date: Date;
  id: string;
  isReviewRecord: boolean;
  place: string;
  review: string;
  updated: Date;
  userName: string;
}

export interface Theme {
  backgroundImage: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  id: string;
  reviews: string[];
  text: string;
  title: string;
  updated: Date;
  viewNumber: number;
}

export interface PostData {
  userImg: string;
  userName: string;
  image: string;
  text: string;
  date: string;
  reviewCount: number;
}

export interface UserData {
  userName: string;
  reservationCount: number;
  payCount: number;
}

type PlaceType = "hospital" | "restaurant" | "cafe" | "shop" | string; 

export interface PaginatedPlacesType {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: PlaceItemType[];
}

export interface PlaceItemType {
  collectionId: string;
  collectionName: string;
  id: string;
  placeName: string;
  price: number;
  type: PlaceType;
  address: string;
  created: string;
  updated: string;
}

// GET 유저데이터 타입 -----------------------
interface PaginatedVisitRecordsType {
  items: VisitRecordType[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

interface VisitRecordType {
  collectionId: string;
  collectionName: string;
  created: string;
  date: string;
  id: string;
  isReviewRecord: boolean;
  place: string;
  review: string;
  updated: string;
  userName: string;
}


// GET 리뷰데이터 타입 -----------------------
interface PaginatedReviewsType {
  items: ReviewItemType[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}
interface ReviewItemType {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  img: string;
  place: string;
  tags: string[];
  text: string;
  updated: string;
  userName: string;
}

export interface VisitData {
  id: string;
  price: number;
  date: string;
  type: string;
  placeName: string;
  reviewText: string;
  reviewImg: string;
  reviewTags: string[];
}

export interface LikeKeywordData {
  keywordText: string;
}
