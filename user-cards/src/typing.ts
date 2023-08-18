export interface Props {
    user: {
        id: number;
        email: string;
        avatar: string;
        username: string;
        gender: string;
        first_name: string;
        last_name: string;
        date_of_birth: string;
        address:{
            city: string;
        }
    }
}