//   get  /api/video
import video from "~/database/video"
// 通过defineEventHandler定义接口
export default defineEventHandler(() => {
  return video;
})