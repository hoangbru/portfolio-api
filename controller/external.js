import External from "../models/external.js";

export const getAll = async (req, res) => {
    try {
        const data = await External.find()
        if (data.length == 0) {
            return res.status(203).json();
        }
        return res.status(200).json(data);

    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await External.findById(id)
        if (!data) {
            return res.status(200).json();
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await External.create(body)
        if (data.length === 0) {
            return res.status(200).json({
                message: "Thêm thất bại"
            });
        }
        return res.status(200).json({
            message: "Thêm thành công",
            data
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        await External.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Xoá thành công",
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const  data  = await External.findOneAndUpdate({_id: id}, body, {new: true})
        if (!data) {
            return res.status(200).json({
                message: "Cập nhật thất bại"
            })
        }
        return res.status(200).json({
            message: "Cập nhật thành công",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}