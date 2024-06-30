import OpenAI from "openai";

export async function Send(input: string) {

    console.log("Sent request")

    const openAI = new OpenAI({
        apiKey: "sk-proj-2YaM60M0ppjAlh7gBIq1T3BlbkFJpvXSZSPxsiSeZPseQssF", dangerouslyAllowBrowser: true
    });

    const completion = await openAI.chat.completions.create({
        messages: [{role: "system", content: "You are a helpful assistant and your only job is to take the input and then return the job from the following list that makes the most sense: Renewable Energy Analyst, Environmental Scientist, Eco-Infrastructure Designer, Water Resources Manager, Forest Projects Coordinator, Waste Management Coordinator, Carbon Footprint Manager, Environmental Policy Analyst, Community Events Coordinator, Green Finance Analyst, Environmental Engineer, Urban Planner Coordinator; input:"+input}],
        model: "gpt-3.5-turbo",
    });
    console.log("text:",completion.choices[0])
    const rec : string | null = completion.choices[0].message.content;
    return rec;
}