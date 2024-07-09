//   get  /api/channel
import channel from "~/database/channel"
// 通过defineEventHandler定义接口
export default defineEventHandler(() => {
  return channel;
})