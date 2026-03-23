import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

function run(){
    core.notice('Hello from deploy-s3-js action!');

    const bucket = core.getInput('bucket-name', { required: true });
    const region = core.getInput('region', { required: true });
    const sourceDir = core.getInput('source-dir', { required: true });

    const context = github.context;
    core.notice(`Uploading to ${region} bucket ${bucket} from ${sourceDir}...`);

    const s3Uri = `s3://${bucket}`;
    // exec.exec(`aws s3 sync ${sourceDir} ${s3Uri} --region ${region}`);
    core.notice(`Upload complete to ${s3Uri}!`);
}

run();