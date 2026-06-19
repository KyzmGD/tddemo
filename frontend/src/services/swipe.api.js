import api, { getAuthToken } from "./api";
import { demoMatches, demoMessages, demoProfiles, isDemoToken } from "./demoAuth";

let localDemoMessages = [...demoMessages];

export async function discover(limit = 20) {
  if (isDemoToken(getAuthToken())) {
    return demoProfiles.slice(0, limit);
  }

  const response = await api.get("/swipes/discover", { params: { limit } });
  return response.data.users;
}

export async function sendSwipe(targetUserId, direction) {
  if (isDemoToken(getAuthToken())) {
    return {
      swipe: {
        _id: `demo-swipe-${Date.now()}`,
        targetUser: targetUserId,
        direction,
      },
      isMatch: direction === "superlike",
      match: direction === "superlike" ? demoMatches[0] : null,
    };
  }

  const response = await api.post("/swipes", { targetUserId, direction });
  return response.data;
}

export async function getMatches() {
  if (isDemoToken(getAuthToken())) {
    return demoMatches;
  }

  const response = await api.get("/matches");
  return response.data.matches;
}

export async function unmatch(matchId) {
  if (isDemoToken(getAuthToken())) {
    return demoMatches.find((match) => match._id === matchId) || null;
  }

  const response = await api.patch(`/matches/${matchId}/unmatch`);
  return response.data.match;
}

export async function getMessages(matchId) {
  if (isDemoToken(getAuthToken())) {
    return localDemoMessages.filter((message) => message.match === matchId);
  }

  const response = await api.get(`/chats/${matchId}/messages`);
  return response.data.messages;
}

export async function sendMessage(matchId, text) {
  if (isDemoToken(getAuthToken())) {
    const message = {
      _id: `demo-message-${Date.now()}`,
      match: matchId,
      sender: "demo-user",
      text,
      createdAt: new Date().toISOString(),
    };

    localDemoMessages = [...localDemoMessages, message];
    return message;
  }

  const response = await api.post(`/chats/${matchId}/messages`, { text });
  return response.data.message;
}
