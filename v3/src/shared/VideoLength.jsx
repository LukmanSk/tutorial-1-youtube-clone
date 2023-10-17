import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return <span>{videoLengthInSeconds}</span>;
};

export default VideoLength;
