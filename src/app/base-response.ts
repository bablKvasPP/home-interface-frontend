export class BaseResponse<Type> {
  status: String = "ok"
  data!: Type
}
