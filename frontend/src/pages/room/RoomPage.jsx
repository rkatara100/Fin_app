import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const RoomPage = () => {

  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  const { roomId } = useParams();
  const myMeeting = async (element) => {

    const temp = 1638894965;
    const str = "8701f778c7b4f62e7413ec9f8900a9ab";


    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      temp,
      str,
      roomId,
      Date.now().toString(),
      authUser.fullName
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showScreenSharingButton: false,
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10">
      <div className="w-full" ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
