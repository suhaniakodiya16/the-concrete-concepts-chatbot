window.watsonAssistantChatOptions = {
integrationID: "18d1ae9e-6a89-47cd-8d66-d6ce1f5f35d3", // The ID of this integration.
region: "us-south", // The region your integration is hosted in.
serviceInstanceID: "a613d01f-4c58-4a2f-b840-0a96c932e472", // The ID of your service instance.
onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
const t=document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
document.head.appendChild(t);
});