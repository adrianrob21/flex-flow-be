import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { UserDetails } from "./user-details.interface";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  _getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };
  }

  async createUser(
    fullName: string,
    email: string,
    hashedPassword: string
  ): Promise<UserDocument> {
    const newUser = new this.userModel({
      fullName,
      password: hashedPassword,
      email,
    });

    return newUser.save();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();

    if (!user) return null;

    return this._getUserDetails(user);
  }
}
