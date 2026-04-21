# install vllm

```bash
# 1. 找到你想放置环境的父目录，创建一个新环境
# 假设你想放在 /home/scott/py_envs/vllm_prod
conda create --prefix /home/scott/py_envs/vllm_prod python=3.10 -y

# 2. 激活环境 (注意路径模式激活方式不同)
conda activate /home/scott/py_envs/vllm_prod

# 3. 重新安装 vLLM (使用腾讯云镜像加速)
pip install vllm modelscope -i https://mirrors.cloud.tencent.com/pypi/simple

pip show vllm

```

# install qwen-code
```bash
# 1. 安装下载工具
pip install modelscope -i https://mirrors.cloud.tencent.com/pypi/simple

# 2. 手动下载 AWQ 版本到指定目录 (假设放在 /home/scott/models)
# 这个命令会自动处理断点续传，非常稳
modelscope download --model qwen/Qwen2.5-Coder-14B-Instruct-AWQ --local_dir /home/scott/models/Qwen2.5-Coder-14B-AWQ


# 2. 手动下载 AWQ 版本到指定目录 (假设放在 /home/scott/models) for v100
# 这个命令会自动处理断点续传，非常稳
modelscope download --model qwen/Qwen2.5-Coder-14B-Instruct-GPTQ-Int4 --local_dir /home/scott/models/Qwen2.5-Coder-14B-Instruct-GPTQ-Int4
```

# run
```bash
python3 -m vllm.entrypoints.openai.api_server \
    --model /home/scott/models/Qwen2.5-Coder-14B-AWQ \
    --max-model-len 8192 \
    --gpu-memory-utilization 0.9 \
    --trust-remote-code

#for v100
python -m vllm.entrypoints.openai.api_server \
    --model  /home/scott/models/Qwen2.5-Coder-14B-Instruct-GPTQ-Int4 \
    --max-model-len 8192 \
    --gpu-memory-utilization 0.9 \
    --trust-remote-code \
    --quantization gptq \
    --dtype float16

```
