import React from "react";

const NewletterComponent = ({ language }) => {
  const getTextContent = () => {
    switch (language) {
      case "en":
        return {
          newsletters: "Newsletters",
          storiesAndInterviews: "Stories and Interviews",
          subscribeText:
            "Subscribe to stay informed about new product features, the latest in technology, solutions, and updates.",
          enterNamePlaceholder: "Enter your name",
          privacyPolicyText: "We care about your data in our privacy policy.",
          subscribeButton: "Subscribe",
        };
      case "kh":
        return {
          newsletters: "ព្រឹត្តិការណ៍",
          storiesAndInterviews: "រឿងនិទាននិងការសម្ភាស",
          subscribeText:
            "ជាកម្មវិធីដើម្បីទាញយកព័ត៌មានថ្មីៗអំពីលក្ខខណ្ឌផលិតថ្មី, ចុចរឿងនិងសម្លេងលក្ខខណ្ឌសម្រាប់កម្មវិធីទាញយក, និងការធ្វើបច្ចុប្បន្ន។",
          enterNamePlaceholder: "បញ្ចូលអុីម៉ែលរបស់អ្នក",
          privacyPolicyText: "យើងរៀបចំព័ត៌មានរបស់អ្នកនៅក្នុងគោលការណ៍ភាគច្រើន។",
          subscribeButton: "តាមដាន",
        };
      default:
        return {
          newsletters: "Newsletters",
          storiesAndInterviews: "Stories and Interviews",
          subscribeText:
            "Subscribe to stay informed about new product features, the latest in technology, solutions, and updates.",
          enterNamePlaceholder: "Enter your name",
          privacyPolicyText: "We care about your data in our privacy policy.",
          subscribeButton: "Subscribe",
        };
    }
  };
  const {
    newsletters,
    storiesAndInterviews,
    subscribeText,
    enterNamePlaceholder,
    privacyPolicyText,
    subscribeButton,
  } = getTextContent();
  return (
    <div>
      <div className="p-8 text-center ">
        <div>
          <p className="text-lg font-semibold text-blue-600 mb-2">
            {newsletters}
          </p>
          <h1 className="text-2xl font-bold mb-4">{storiesAndInterviews}</h1>
          <p className="text-gray-700 dark:text-white">{subscribeText}</p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              placeholder={enterNamePlaceholder}
              className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 dark:text-black"
            />
            <p className="mt-2 text-sm text-gray-600 dark:text-white">
              {privacyPolicyText}
            </p>
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              {subscribeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewletterComponent;
