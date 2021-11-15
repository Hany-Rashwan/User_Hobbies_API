/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { HobbyService } from "./hobbies.service";
import { HobbyRepository } from "./hobby.repository";

describe("UserService", () => {
  let service: HobbyService;
  //let repository: Repository<User>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HobbyRepository,HobbyService],
    }).compile();
    service = module.get<HobbyService>(HobbyService);
  });
  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
