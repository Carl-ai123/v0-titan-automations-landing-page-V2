export type ServicePageConfig = {
  slug: string
  title: string
  seoTitle: string
  description: string
  intro: string
  problemTitle: string
  problem: string
  benefits: Array<{ title: string; description: string }>
  steps: Array<{ title: string; description: string }>
  faqs: Array<{ question: string; answer: string }>
}

export const servicePages: Record<string, ServicePageConfig> = {
  'ai-chatbots': {
    slug: 'ai-chatbots',
    title: 'AI Chatbots for UK Service Businesses',
    seoTitle: 'AI Chatbots for UK Service Businesses | Titan Automations',
    description:
      'AI chatbots that answer common questions, qualify enquiries and capture customer details for UK service businesses.',
    intro:
      'Give customers a useful answer when your team is busy or offline. We build AI chatbots around your services, your rules and your existing lead process.',
    problemTitle: 'Slow replies turn good enquiries into lost work',
    problem:
      'Customers often contact several businesses at once. If your website cannot answer a basic question or collect the right details immediately, the enquiry can move on before your team sees it.',
    benefits: [
      { title: 'Answer common questions', description: 'Provide consistent answers based on your approved services, policies and availability.' },
      { title: 'Qualify intent', description: 'Collect the job type, location, urgency and other details your team needs before following up.' },
      { title: 'Route every lead', description: 'Send qualified enquiries into your CRM, inbox or booking flow with the conversation attached.' },
    ],
    steps: [
      { title: 'Map the conversation', description: 'We identify the questions customers ask and the information your team needs.' },
      { title: 'Build and connect', description: 'We configure the assistant and connect it to your website and lead tools.' },
      { title: 'Test and hand over', description: 'We test real scenarios, set clear boundaries and show your team how to update it.' },
    ],
    faqs: [
      { question: 'Will the chatbot replace my team?', answer: 'No. It handles repetitive first-line questions and gathers details, then routes conversations that need a person.' },
      { question: 'Can it work with my current website?', answer: 'In most cases, yes. We can add a chatbot to an existing site and connect it to the tools you already use.' },
      { question: 'How do you stop incorrect answers?', answer: 'We define approved information, escalation rules and topics the assistant must pass to a person. We also test edge cases before launch.' },
    ],
  },
  'booking-automation': {
    slug: 'booking-automation',
    title: 'Booking Automation for Service Businesses',
    seoTitle: 'Booking Automation for UK Service Businesses | Titan Automations',
    description:
      'Online booking, calendar sync, reminders and no-show follow-up for UK service businesses.',
    intro:
      'Let customers choose an available time without phone calls or back-and-forth messages. We connect booking, reminders and calendar updates into one reliable flow.',
    problemTitle: 'Manual booking creates delays and avoidable no-shows',
    problem:
      'When appointments depend on someone checking a diary and replying manually, customers wait, calendars drift out of sync and reminders are easily forgotten.',
    benefits: [
      { title: 'Self-service booking', description: 'Customers can choose from approved times while your availability rules stay protected.' },
      { title: 'Automatic reminders', description: 'Send confirmation and reminder messages without relying on staff to remember.' },
      { title: 'No-show recovery', description: 'Trigger a rebooking message when an appointment is missed or cancelled.' },
    ],
    steps: [
      { title: 'Define the rules', description: 'We map appointment types, durations, buffers, availability and team calendars.' },
      { title: 'Connect the journey', description: 'We connect the booking page, calendar, reminders and customer records.' },
      { title: 'Test every outcome', description: 'We test bookings, reschedules, cancellations and no-shows before launch.' },
    ],
    faqs: [
      { question: 'Can it use my existing calendar?', answer: 'Usually, yes. We build around common calendar and booking tools whenever they support the required connections.' },
      { question: 'Can different services have different appointment lengths?', answer: 'Yes. Each appointment type can have its own duration, availability, buffer and questions.' },
      { question: 'Can customers reschedule themselves?', answer: 'Yes. We can include controlled rescheduling and cancellation links, then update the connected calendar automatically.' },
    ],
  },
  'crm-automation': {
    slug: 'crm-automation',
    title: 'CRM Automation for UK Service Businesses',
    seoTitle: 'CRM Automation for UK Service Businesses | Titan Automations',
    description:
      'CRM pipeline automation that captures enquiries, updates stages and keeps follow-up moving for UK service businesses.',
    intro:
      'Turn scattered enquiries into a visible pipeline. We connect your forms, inboxes, booking tools and CRM so every lead has an owner, a stage and a next action.',
    problemTitle: 'Leads disappear when records depend on manual updates',
    problem:
      'Spreadsheets, inboxes and disconnected tools make it difficult to see what is waiting, what has been quoted and what needs a follow-up. The gaps cost time and revenue.',
    benefits: [
      { title: 'Automatic lead capture', description: 'Create or update the right CRM record when an enquiry arrives.' },
      { title: 'Clear pipeline stages', description: 'Move opportunities through agreed stages using real business events.' },
      { title: 'Useful notifications', description: 'Alert the right person when a lead needs attention instead of sending noise to everyone.' },
    ],
    steps: [
      { title: 'Map your pipeline', description: 'We define the real stages from new enquiry through delivery and review.' },
      { title: 'Connect your tools', description: 'We connect the lead sources, CRM, calendar and communication channels.' },
      { title: 'Add controls', description: 'We add ownership, alerts, exception handling and reporting so the pipeline stays reliable.' },
    ],
    faqs: [
      { question: 'Do I need to replace my CRM?', answer: 'Not necessarily. We start with the CRM you already use and only recommend a change if it cannot support the required process.' },
      { question: 'Can it stop duplicate contacts?', answer: 'Yes. We can match records using agreed identifiers and define how new information should update an existing contact.' },
      { question: 'Will my team still be able to update records manually?', answer: 'Yes. Automation handles repeatable changes while your team keeps control of decisions and exceptions.' },
    ],
  },
  'follow-up-automation': {
    slug: 'follow-up-automation',
    title: 'Lead Follow-Up Automation',
    seoTitle: 'Lead Follow-Up Automation for UK Businesses | Titan Automations',
    description:
      'Automated email, SMS and WhatsApp follow-up sequences for UK service businesses that want fewer leads to go cold.',
    intro:
      'Follow up consistently without sending generic messages forever. We build timed sequences that react to the lead, stop when someone replies and keep your team informed.',
    problemTitle: 'Most follow-up fails because it relies on memory',
    problem:
      'Busy teams respond to the urgent work first. Quotes and enquiries that need a second or third touch are easily forgotten, even when the customer is still interested.',
    benefits: [
      { title: 'Faster first response', description: 'Acknowledge new enquiries quickly and explain what happens next.' },
      { title: 'Consistent quote chasing', description: 'Send approved follow-ups on a schedule without creating more admin.' },
      { title: 'Reply-aware sequences', description: 'Pause or stop messages when the lead replies, books or changes status.' },
    ],
    steps: [
      { title: 'Choose the triggers', description: 'We define the events that start, pause and end each sequence.' },
      { title: 'Write the messages', description: 'We create clear, useful messages that match your tone and the customer journey.' },
      { title: 'Connect and monitor', description: 'We connect the channels, test every branch and make performance visible.' },
    ],
    faqs: [
      { question: 'Will the messages feel automated?', answer: 'They do not have to. We use your tone, relevant lead details and sensible timing rather than sending the same generic message to everyone.' },
      { question: 'Which channels can you use?', answer: 'Depending on your tools and permissions, sequences can use email, SMS or WhatsApp, with replies routed back to your team.' },
      { question: 'What happens when someone replies?', answer: 'The sequence can stop automatically, update the CRM and notify the person responsible for the lead.' },
    ],
  },
  'review-automation': {
    slug: 'review-automation',
    title: 'Google Review Request Automation',
    seoTitle: 'Google Review Automation for UK Businesses | Titan Automations',
    description:
      'Automated Google review requests for UK service businesses, sent after completed work by SMS or email.',
    intro:
      'Ask every eligible customer for feedback at the right moment. We connect completed jobs to a simple review request flow, with clear tracking and sensible follow-up.',
    problemTitle: 'Great service does not automatically produce reviews',
    problem:
      'Teams usually remember to ask only occasionally. That creates inconsistent review volume and leaves your online reputation behind the quality of the work you deliver.',
    benefits: [
      { title: 'Timely requests', description: 'Send the request after an agreed completion event while the experience is still fresh.' },
      { title: 'Simple customer journey', description: 'Give customers a direct, mobile-friendly route to your genuine Google review form.' },
      { title: 'Visible tracking', description: 'Record when a request was sent and avoid repeatedly asking the same customer.' },
    ],
    steps: [
      { title: 'Choose the completion signal', description: 'We define the CRM stage, booking outcome or job status that starts the request.' },
      { title: 'Connect the review link', description: 'We add your genuine Google review form and approved customer messages.' },
      { title: 'Test and report', description: 'We test delivery, exclusions and tracking before the workflow goes live.' },
    ],
    faqs: [
      { question: 'Can you guarantee positive reviews?', answer: 'No. Customers decide whether to leave a review and what to write. The system makes the request consistent and easy.' },
      { question: 'Can unhappy customers be blocked from reviewing?', answer: 'No. Review gating is not appropriate. The workflow should request honest feedback consistently and give your team a separate route to resolve service issues.' },
      { question: 'Can this work from my CRM or booking system?', answer: 'Usually, yes. We can trigger requests from a completed-job stage, appointment outcome or another reliable business event.' },
    ],
  },
}

export const serviceSlugs = Object.keys(servicePages)
